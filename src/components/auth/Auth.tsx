import * as React from 'react';
import useAuthStore from "@/store/AuthStore";
import { getToken, removeToken } from '@/lib/token';
import { apiMock } from '@/lib/apiMock';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import Loading from '../Loading';
import { RoleType } from '@/types/user';

type PageProps = {

}

type AuthProps = {
  allowedRoles: RoleType;

}

export const Auth = <P extends PageProps>(
  Component: React.ComponentType<P & AuthProps>,
): React.ComponentType<P & AuthProps> => {
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
  //   if(isAuthenticated) {
  //     if(user?.role === 'admin') {
  //       router.push('/admin');
  //     } else if(user?.role === 'seller') {
  //       router.push('/seller');
  //     } else {
  //       router.push('/');
  //     }
  //   }
  // })
  const WrappedComponent: React.ComponentType<P & AuthProps> = (props) => {
    React.useEffect(() => {
      const authorization = () => {
        if(isLoading) {
          return <Loading/>
        }
        if(!isAuthenticated) {
          router.push('/login');
        }
        authorization();
      }
    }, [])
    return isAuthenticated && props.allowedRoles == user?.role ? <Component {...props} /> : (
      <p>You have no Access into this page</p>
    )
  }
  return WrappedComponent
}