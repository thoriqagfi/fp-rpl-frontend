import * as React from 'react';
import { Route, redirect, Navigate, RouteProps } from 'react-router-dom'
import useAuthStore from '@/store/AuthStore';
import Loading from '@/components/Loading';
import { AppPropsType, NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils';
import { JsxElement } from 'typescript';

interface PrivateRouteProps {
  role: 'admin' | 'seller'| 'customer';
  // path: string;
  children: string | React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[] | React.ReactPortal | null | undefined | JsxElement; 
}

export default function PrivateRoute({
  // path,
  role,
  children
  }: PrivateRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  if(!isAuthenticated) {
    isLoading ? <Navigate to={'/loading'} /> : <Navigate to="/login" />
  }
  if(isAuthenticated && !isLoading) {
    if(role !== user?.role) {
      return <Navigate to="/" />
    }
  }
  return children;
}