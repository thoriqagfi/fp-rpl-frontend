import React from 'react';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import { Button, Dropdown, Space } from 'antd';

type ButtonDropdownType = {
  className: string;
  title: string;
};

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" href="#">
        <p className='font-semibold text-gray-800 leading-tight'>John Doe</p>
        <p className='text-gray-800'>johndoe@gmail.com</p>
      </a>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: (
      <a target="_blank" href="#">
        Dashboard
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" href="#">
        Settings
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target="_blank" href="#">
        Log out
      </a>
    ),
  },
];

export const DropdownsAccount: React.FC = () => (
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <Image className="w-8 h-8 rounded-full" src="/user-profile.jpeg" alt="user photo" height={50} width={50}/>
      </button>      
      </Dropdown>
  </Space>
);

export default DropdownsAccount;