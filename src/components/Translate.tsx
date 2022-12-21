import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Translate() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          Translate
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='http://lacontroller.io:9080/'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  English
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='https://lacontroller-io.translate.goog/?_x_tr_sch=http&_x_tr_port=9080&_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Español
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='https://lacontroller-io.translate.goog/?_x_tr_sch=http&_x_tr_port=9080&_x_tr_sl=auto&_x_tr_tl=ko&_x_tr_hl=en&_x_tr_pto=wapp'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  한국어
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href='https://lacontroller-io.translate.goog/?_x_tr_sch=http&_x_tr_port=9080&_x_tr_sl=auto&_x_tr_tl=tl&_x_tr_hl=en&_x_tr_pto=wapp'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Filipino / Tagalog
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='https://lacontroller-io.translate.goog/?_x_tr_sch=http&_x_tr_port=9080&_x_tr_sl=auto&_x_tr_tl=th&_x_tr_hl=en&_x_tr_pto=wapp'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  ภาษาไทย
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='https://lacontroller-io.translate.goog/?_x_tr_sch=http&_x_tr_port=9080&_x_tr_sl=auto&_x_tr_tl=vi&_x_tr_hl=en&_x_tr_pto=wapp'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Tiếng Việt
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='https://lacontroller-io.translate.goog/?_x_tr_sch=http&_x_tr_port=9080&_x_tr_sl=auto&_x_tr_tl=fa&_x_tr_hl=en&_x_tr_pto=wapp'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  فارسی
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='https://lacontroller-io.translate.goog/?_x_tr_sch=http&_x_tr_port=9080&_x_tr_sl=auto&_x_tr_tl=hy&_x_tr_hl=en&_x_tr_pto=wapp'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  հայերեն
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='https://lacontroller-io.translate.goog/?_x_tr_sch=http&_x_tr_port=9080&_x_tr_sl=auto&_x_tr_tl=ru&_x_tr_hl=en&_x_tr_pto=wapp'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  русский
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
