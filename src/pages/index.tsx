import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import LandingPage from '@/components/landingpage/LandingPage'
import { AppProps } from 'next/app'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import useAuthStore from '@/store/AuthStore'
import { getToken, removeToken } from '@/lib/token'
import { apiMock } from '@/lib/apiMock'
import PrivateRoute from '@/routes/PrivateRoute'

import Loading from '@/components/Loading'
import Admin from './dashboard/admin'

export default function Home({
  Component,
  pageProps
}: AppProps) {
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

  if(isLoading) {
    return <Loading />
  }

  return (
    <>
      <LandingPage/>
      {/* <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage/>} />
          <Route
            path="/dashboard/admin/*"
            element={
              <PrivateRoute role='admin' >
                <Admin />
              </PrivateRoute>
            }
          />
          <PrivateRoute path="/dashboard/admin/*" Component={<Component {...pageProps}/>} role="admin" />
          <PrivateRoute path="/dashboard/seller/*" Component={<Component {...pageProps}/>} role="seller" />
          <PrivateRoute path="/dashboard/customer/*" Component={<Component {...pageProps}/>} role="customer" />

        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  )
}
