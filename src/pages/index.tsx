import * as React from 'react'
import { useRouter } from 'next/router'
import LandingPage from '@/components/landingpage/LandingPage'


import useAuthStore from '@/store/AuthStore'
import { getToken, removeToken } from '@/lib/token'
import { apiMock } from '@/lib/apiMock'

import Loading from '@/components/Loading'

export default function Home() {
  const router =  useRouter();
  const { user, login, logout, isAuthenticated, isLoading, stopLoading } = useAuthStore();
  const checkUser = React.useCallback(() => {
    const token = getToken();
    if(!token) {
      isAuthenticated && logout();
      stopLoading();
      return;
    }
    const loadUser = async () => {
      try {
        const res = await apiMock.get('https://fp-rpl-backend-api-production.up.railway.app/seller/profile', {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        login({
          ...res.data.data,
          token: getToken(),
        })
        stopLoading()
      } catch (err) {
        console.log(err)
        removeToken();
      } finally {
        stopLoading();
      }
    }

    if(!isAuthenticated) {
      loadUser();
    }
  }, [isAuthenticated, login, logout, stopLoading])

  React.useEffect(() => {
    checkUser();

    window.addEventListener('focus', checkUser);
    return () => {
      window.removeEventListener('focus', checkUser);
    }
  }, [checkUser])

  // React.useEffect(() => {
  //   console.log(user)
  //   if(!isLoading) {
  //     if(isAuthenticated) {
  //       if(user?.role === 'admin') {
  //         router.replace('/admin');
  //       } else if(user?.role === 'seller') {
  //         router.replace('/');
  //       } else {
  //         router.replace('/');
  //       }
  //     }
  //   }
  // }, [isLoading, isAuthenticated, user, router])

  if(isLoading && !isAuthenticated) {
    return <Loading />
  }

  return (
    <>
      <LandingPage/>
      {/* <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage/>} />
          <Route path="/admin" element={<Admin/>} />
          <PrivateRoute path="/dashboard/seller/*" element={<Component {...pageProps}/>} role="seller" />
          <PrivateRoute path="/dashboard/customer/*" element={<Component {...pageProps}/>} role="customer" />

        </Routes>
       </BrowserRouter> */}
    </>
  )
}
