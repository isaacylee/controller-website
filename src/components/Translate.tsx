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

              {/*  <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                           English
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          Español
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                           한국어
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          中文
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          Filipino / Tagalog
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          ภาษาไทย
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          Tiếng Việt
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          فارسی
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                         հայերեն
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          русский
                        </a>
                    </div>
                </div>
            </div>
        </div> 
        ); 
}*/}

  