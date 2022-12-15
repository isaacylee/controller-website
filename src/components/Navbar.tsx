import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
 
import { Menu } from '@headlessui/react'
import Translate from '@/components/Translate';
 

const navigation = [
  { name: 'Data', href: '/data', current: true },
  { name: 'Audits', href: '/audits', current: false },
  { name: 'Reports', href: '/reports', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Events', href: '/events', current: false },
  { name: 'Press', href: '/press', current: false },
  { name: 'Contact Us', href: '/contactus', current: false },

 
];
 

 

 

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  
  return (
    
    <Disclosure
      as='nav'
      className='z-10 border-b border-gray-300 drop-shadow-sm'
    >
      {({ open }) => (
        <>
          <div className='mx-auto  max-w-7xl px-2 drop-shadow-sm sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-[#80ffdc]  hover:text-black focus:outline-none'>
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
                  <img
                    className='block h-8 w-auto'
                    src='/images/logo-elect.png'
                    alt='Kenneth Mejia LA City Controller'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-gray-800'
                            : 'text-gray-900 hover:text-black hover:underline',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                         <Translate />
                  </div>
          {/* Translate dropdown menu.*/}
        
 
      
          {/* <Menu>
      <Menu.Button>Language</Menu.Button>
      <Menu.Items>
        {translateList.map((link) => (
          <Menu.Item
            as="a"
            // key={link.code}
            href={link.code}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            {link.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu> */}

    
 
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
                    item.current ? 'bg-green-900 text-white' : 'text-gray-800 ',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
