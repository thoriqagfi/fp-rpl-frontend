import * as React from 'react';
import useAuthStore from "@/store/AuthStore";
import { getToken, removeToken } from '@/lib/token';
import { apiMock } from '@/lib/apiMock';
import { useRouter } from 'next/router';

export const Auth = () => {
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

  React.useEffect(() => {
    if(!isLoading) {
      if(isAuthenticated) {
        if(user?.role === 'admin') {
          router.push('/admin');
        } else if(user?.role === 'seller') {
          router.push('/seller');
        } else {
          router.push('/');
        }
      }
    }
  })
}