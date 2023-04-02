import * as React from 'react';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import { Dropdown, Space } from 'antd';
import useAuthStore from '@/store/AuthStore';
import Link from 'next/link';

type ButtonDropdownType = {
  className: string;
  title: string;
};


export default function DropdownsAccount() {
  const { logout, user, isAuthenticated } = useAuthStore();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href={'#'}>
          <p className='font-semibold text-gray-800 leading-tight'>{user?.first_name + " " + user?.last_name}</p>
          <p className='text-gray-800'>{user?.email}</p>
        </Link>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: (
        <Link href={'#'}>
          Dashboard
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link href={'#'}>
          Settings
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link href={'/'} onClick={() => {
          logout()
        }}>
          Logout
        </Link>
      ),
    },
  ];

  return (
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <button type="button" className="flex mr-3 text-sm mt-1.5 bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <Image className="w-8 h-8 rounded-full" src="/user-profile.jpeg" alt="user photo" height={50} width={50}/>
      </button>
      </Dropdown>
  </Space>
)};