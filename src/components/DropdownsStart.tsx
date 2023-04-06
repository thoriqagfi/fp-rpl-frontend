import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href={'/register'}>
        Register
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href={'/login'}>
        Login
      </Link>
    ),
  },
];

const items2: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href={'/'}>
        Home
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href={'/products'}>
        Products
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" href="#">
        Services
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" href="#">
        Contact
      </a>
    ),
  },
];

export const DropdownsStart: React.FC = () => (
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <button type="button" className="text-white cursor-pointer bg-gray-900 hover:bg-gray-800 duration-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Get Started</button>
      </Dropdown>
      <Dropdown menu={{ items: items2 }}placement="bottomRight">
      <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      </Dropdown>
  </Space>
);

export default DropdownsStart;