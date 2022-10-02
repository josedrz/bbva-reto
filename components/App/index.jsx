import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  DocumentArrowUpIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};
const navigation = [];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppView() {
  const subNavigation = [
    { name: "Identificación", href: "#", icon: UserCircleIcon, current: true },
    {
      name: "Localización y entorno",
      href: "#",
      icon: MapPinIcon,
      current: false,
    },
    {
      name: "Tipología y posesión",
      href: "#",
      icon: MagnifyingGlassIcon,
      current: false,
    },
    {
      name: "Características del edificio",
      href: "#",
      icon: BuildingOfficeIcon,
      current: false,
    },
    {
      name: "Características del inmueble",
      href: "#",
      icon: ClipboardDocumentListIcon,
      current: false,
    },
    {
      name: "Archivos a cargar",
      href: "#",
      icon: DocumentArrowUpIcon,
      current: false,
    },
  ];

  return (
    <div>
      <Disclosure
        as="div"
        className="relative overflow-hidden bg-custom-700 pb-32"
      >
        {({ open }) => (
          <>
            <nav
              className={classNames(
                open ? "bg-custom-900" : "bg-transparent",
                "relative z-10 border-b border-custom-500 border-opacity-25 lg:border-none lg:bg-transparent"
              )}
            >
              <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-custom-800">
                  <div className="flex items-center px-2 lg:px-0">
                    <div className="flex-shrink-0">
                      <svg
                        width="100"
                        height="30"
                        viewBox="0 0 600 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3_7440)">
                          <path
                            d="M432.2 24.4L380.6 122.6C379.5 124.7 376.3 124.7 375.2 122.6L323.6 24.4C323.1 23.4 322.1 22.8 321 22.8H296C294.3 22.8 293.2 24.6 294 26.1L375.3 178.3C376.4 180.4 379.4 180.4 380.6 178.3L461.9 26.1C462.7 24.6 461.6 22.8 459.9 22.8H434.9C433.7 22.8 432.7 23.4 432.2 24.4Z"
                            fill="white"
                          />
                          <path
                            d="M461.5 155.5L513.1 57.3C514.2 55.2 517.4 55.2 518.5 57.3L570.1 155.5C570.6 156.5 571.6 157.1 572.7 157.1H597.7C599.4 157.1 600.5 155.3 599.7 153.8L518.4 1.60002C517.3 -0.499976 514.3 -0.499976 513.1 1.60002L431.8 153.8C431 155.3 432.1 157.1 433.8 157.1H458.8C459.9 157 461 156.4 461.5 155.5Z"
                            fill="white"
                          />
                          <path
                            d="M108.8 95.2C119.6 89.8 126.3 78.0999 126.3 63.7999C126.3 39.2999 107.2 22.7 80.3 22.7H3C1.3 22.7 0 24 0 25.7V176.8C0 178.5 1.3 179.8 3 179.8H77C114 179.8 133.5 163.9 133.5 132.7C133.5 102.3 108.8 95.2 108.8 95.2ZM29 45.5H74.9C91.8 45.5 100.4 52.6999 100.4 66.0999C100.4 79.4999 91.8 86.6999 74.9 86.6999H29C27.4 86.6999 26 85.3999 26 83.6999V48.5C26 46.8 27.3 45.5 29 45.5ZM75.5 157H29C27.3 157 26 155.7 26 154V112.3C26 110.7 27.3 109.3 29 109.3H75.5C97.7 109.3 107.6 115.6 107.6 133.1C107.5 150.8 97.9 157 75.5 157Z"
                            fill="white"
                          />
                          <path
                            d="M267.5 95.2C278.3 89.8 285 78.0999 285 63.7999C285 39.2999 265.9 22.7 239 22.7H161.6C159.9 22.7 158.6 24 158.6 25.7V176.8C158.6 178.5 159.9 179.8 161.6 179.8H235.6C272.6 179.8 292.1 163.9 292.1 132.7C292.2 102.3 267.5 95.2 267.5 95.2ZM187.7 45.5H233.6C250.5 45.5 259.1 52.6999 259.1 66.0999C259.1 79.4999 250.5 86.6999 233.6 86.6999H187.7C186 86.6999 184.7 85.3999 184.7 83.6999V48.5C184.7 46.8 186 45.5 187.7 45.5ZM234.1 157H187.6C186 157 184.6 155.7 184.6 154V112.3C184.6 110.7 185.9 109.3 187.6 109.3H234.1C256.3 109.3 266.2 115.6 266.2 133.1C266.2 150.8 256.5 157 234.1 157Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3_7440">
                            <rect width="600" height="179.8" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="hidden lg:ml-6 lg:block lg:space-x-4">
                      <div className="flex">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-black bg-opacity-25"
                                : "hover:bg-custom-800",
                              "rounded-md py-2 px-3 text-sm font-medium text-white"
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                    <div className="text-white font-bold cursor-pointer mx-4">
                      Equipo
                    </div>
                    <div className="text-white font-bold cursor-pointer mx-4">
                      Algoritmo
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-custom-200 hover:bg-custom-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6 flex-shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6 flex-shrink-0"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex items-center">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-4 flex-shrink-0">
                        <div>
                          <Menu.Button className="flex rounded-full text-sm text-white focus:bg-custom-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-custom-900">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block py-2 px-4 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="bg-custom-900 lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black bg-opacity-25"
                          : "hover:bg-custom-800",
                        "block rounded-md py-2 px-3 text-base font-medium text-white"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-custom-800 pt-4 pb-3">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-custom-200">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full p-1 text-custom-200 hover:bg-custom-800 hover:text-white focus:bg-custom-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-custom-900"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-custom-200 hover:bg-custom-800 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </nav>
            <div
              aria-hidden="true"
              className={classNames(
                open ? "bottom-0" : "inset-y-0",
                "absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0"
              )}
            >
              <div className="absolute inset-0 flex">
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#082247" }}
                />
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#004481" }}
                />
              </div>
              <div className="relative flex justify-center">
                <svg
                  className="flex-shrink-0"
                  width={1750}
                  height={308}
                  viewBox="0 0 1750 308"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                    fill="#082247"
                  />
                  <path
                    d="M1465.84 308L16.816 0H1750v308h-284.16z"
                    fill="#004481"
                  />
                  <path
                    d="M1733.19 0L284.161 308H0V0h1733.19z"
                    fill="#082247"
                  />
                  <path
                    d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                    fill="#082247"
                  />
                </svg>
              </div>
            </div>
            <header className="relative py-8">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-white flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 mr-2 mt-px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                  B1A23B
                </h1>
              </div>
            </header>
          </>
        )}
      </Disclosure>

      <main className="relative -mt-32">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  {subNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-custom-500 border-custom-200 text-white hover:bg-custom-500"
                          : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                        "group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-gray-400 group-hover:text-gray-500",
                          "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </aside>

              <div className="divide-y divide-gray-200 lg:col-span-9">
                {/* S1 */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <h2 className="text-md font-medium leading-6 text-gray-900">
                    Titulación e inscripción
                  </h2>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Matriz
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nro
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Fecha
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                {/* S2 */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <h2 className="text-md font-medium leading-6 text-gray-900">
                    Solicitante
                  </h2>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Banco
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Oficina
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Funcionario
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                {/* S3 */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <h2 className="text-md font-medium leading-6 text-gray-900">
                    Cliente
                  </h2>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tipo documento
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nro documento
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nombres y apellidos
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <h2 className="text-md font-medium leading-6 text-gray-900">
                    Propietario
                  </h2>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tipo documento
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nro documento
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nombres y apellidos
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-end py-4 px-4 sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-custom-500 focus:ring-offset-2"
                  >
                    Guardar
                  </button>
                  <button
                    type="submit"
                    className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-custom-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-custom-800 focus:outline-none focus:ring-2 focus:ring-custom-500 focus:ring-offset-2"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
