import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment } from 'react';

import { ThemeContext } from '@/themeManager';

import { ChangeColour } from './changeColour';

//import Translate from '@/components/Translate';

const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Data', href: '/data', current: true },
  { name: 'Audits', href: '/audits', current: false },
  { name: 'Reports', href: '/reports', current: false },
  { name: 'Budgets', href: '/budgets', current: false },
  // { name: 'Events', href: '/events', current: false },
  // { name: 'Press', href: '/press', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar(props: any) {
  return (
    <Disclosure
      as='nav'
      className='relative z-50 border-b border-gray-300 drop-shadow-sm dark:bg-whosestreets dark:text-white'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 drop-shadow-sm sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-[#80ffdc]  hover:text-black focus:outline-none dark:bg-whosestreets dark:text-white dark:hover:text-gray-100'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/'>
                    <img
                      className='block h-8 w-auto dark:hidden'
                      src='/images/logo-elect.png'
                      alt='Kenneth Mejia LA City Controller'
                    />
                    <img
                      className='hidden h-8 w-auto dark:block'
                      src='/images/KennethMejia-logo-white-elect.png'
                      alt='Kenneth Mejia LA City Controller'
                    />
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-gray-800 dark:text-gray-100'
                            : 'text-gray-900 hover:text-black hover:underline dark:text-white dark:hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    {/* <Translate /> */}
                    <div className='align-right  ml-auto'>
                      <ChangeColour />
                    </div>
                  </div>
                  {/* Translate dropdown menu.*/}
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'></div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-green-900 text-white'
                      : 'text-gray-800 dark:text-gray-100',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <ThemeContext.Consumer>
                {(themeChanger) => (
                  <div
                    className='inline-flex rounded-md shadow-sm'
                    role='group'
                  >
                    <button
                      type='button'
                      className='rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                      onClick={themeChanger.makeLight}
                    >
                      Light
                    </button>
                    <button
                      type='button'
                      className='border-t border-b border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                      onClick={themeChanger.makeDark}
                    >
                      Dark
                    </button>
                    <button
                      type='button'
                      className='rounded-r-md border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
                      onClick={themeChanger.makeSystem}
                    >
                      System
                    </button>
                  </div>
                )}
              </ThemeContext.Consumer>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
