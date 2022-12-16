import * as React from 'react';
import Image from 'next/image';
import { Menu } from '@headlessui/react'

const translateList = [
    { id: 'en', label: 'English', isDefault: true },
    { id: 'es', label: 'Español' },
    { id: 'ko', label: '한국어' },
    { id: 'zh-CN', label: '中文' },
    { id: 'tl', label: 'Filipino / Tagalog' },
    { id: 'th', label: 'ภาษาไทย' },
    { id: 'vi', label: 'Tiếng Việt' },
    { id: 'fa', label: 'فارسی' },
    { id: 'hy', label: 'հայերեն' },
    { id: 'ru', label: 'русский' },
  ]

 
  
export default function Translate() {
    return (
       
 
   <Menu>
      <Menu.Button>Language</Menu.Button>
      <Menu.Items>
        {translateList.map((link) => (
          <Menu.Item
            as="a"
           
            href={link.id}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            {link.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
    )
        }

 