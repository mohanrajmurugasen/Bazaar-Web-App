"use client";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Select } from "antd";
import Food from "./images/food.jpg";
import Clothes from "./images/clothes.jpg";
import Service from "./images/service.webp";
import Image from "next/image";
import AddressModel from "../Address/AddressModel";
import { DownOutlined } from "@ant-design/icons";
import MultiCarousel from "../multiCarousel/page";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Shops", href: "/", current: true },
  { name: "Offers", href: "/", current: false },
  { name: "FAQ", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "components/Profile" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "components/login" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ SlideCategory }) {
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (value) => {
    console.log(`selected ${value}`);
    setCategory(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <>
      <div className="min-h-full sticky top-0 z-50">
        <Disclosure as="nav" className="bg-[#fee6b6] text-black">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={
                            category === "Food"
                              ? Food
                              : category === "Retail"
                              ? Service
                              : Clothes
                          }
                          alt="Your Company"
                        />
                        {/* <div>
                          <Select
                            showSearch
                            placeholder="Select a category"
                            optionFilterProp="children"
                            className="w-40 ml-5"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            options={[
                              {
                                value: "Food",
                                label: "Food",
                              },
                              {
                                value: "Retail",
                                label: "Retail",
                              },
                              {
                                value: "Service",
                                label: "Service",
                              },
                            ]}
                          />
                        </div> */}
                        <a
                          className={"text-black cursor-pointer ml-5"}
                          onClick={() => setIsModalOpen(true)}
                        >
                          <div className="flex justify-between items-center">
                            <MapPinIcon className="w-5 mr-1" />
                            <div className="text-sm font-medium">
                              Bengalore 123456
                            </div>
                            <DownOutlined className="w-5 ml-1" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-5 flex items-center space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-[#e5be70] text-black"
                                : "text-black hover:bg-[#e5be70] hover:text-black",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    {true ? (
                      <div className="ml-4 flex items-center md:ml-6">
                        <button
                          type="button"
                          className="relative rounded-full bg-[#e5be70] p-1 text-black focus:outline-none focus:ring-2 focus:ring-[#e5be70] focus:ring-offset-2 focus:ring-offset-[#e5be70]"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#e5be70] focus:ring-offset-2 focus:ring-offset-[#e5be70]">
                              <span className="absolute -inset-1.5" />
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
                                    <Link
                                      href={`/${item.href}`}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="relative rounded bg-gray-900 p-1 text-white pr-2 pl-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#e5be70]"
                      >
                        Login
                      </button>
                    )}
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#e5be70] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#e5be70] focus:ring-offset-2 focus:ring-offset-[#e5be70]">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-[#e5be70] text-black"
                          : "text-black hover:bg-[#e5be70] hover:text-black",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                {true ? (
                  <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-black">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e5be70] focus:ring-offset-2 focus:ring-offset-[#e5be70]"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-[#e5be70]"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="relative ml-5 mb-5 rounded p-1 bg-gray-900 text-black pr-2 pl-2 focus:outline-none focus:ring-2 focus:ring-[#e5be70] focus:ring-offset-2 focus:ring-offset-[#e5be70]"
                  >
                    Login
                  </button>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {SlideCategory && <MultiCarousel />}

        <AddressModel
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
}
