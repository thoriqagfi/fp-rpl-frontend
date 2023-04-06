import * as React from 'react';
import useAuthStore from '@/store/AuthStore';
import Loading from '@/components/Loading';
import { getToken, removeToken } from '@/lib/token';
import { apiMock } from '@/lib/apiMock';
import { useRouter } from 'next/router';

type Role = {
  allowedRole: string;
}

export default function WithAuth() {
  const router = useRouter();
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
    if(!isAuthenticated && getToken() === null) {
      router.replace('/');
    }
      if(isAuthenticated) {
        if(user?.role === 'admin') {
          router.replace('/dashboard/admin');
        } else if(user?.role === 'seller') {
          router.replace('/dashboard/seller');
        } else {
          router.replace('/');
        }
    }
  }, [isAuthenticated, user, router])

  if(isLoading || !isAuthenticated || !user) {
    return <Loading />
  }
}