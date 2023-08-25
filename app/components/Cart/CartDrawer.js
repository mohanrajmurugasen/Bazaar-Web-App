"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import One from "./images/1.jpeg";
import Two from "./images/2.jpeg";
import Three from "./images/3.jpeg";
import Four from "./images/4.jpeg";
import Five from "./images/5.jpeg";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Mixed Fruits",
    href: "#",
    color: "Salmon",
    price: "2.2",
    quantity: 2,
    imageSrc: One,
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Assorted Fruits",
    href: "#",
    color: "Blue",
    price: "0.8",
    quantity: 1,
    imageSrc: Two,
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Banana",
    href: "#",
    color: "Blue",
    price: "1.1",
    quantity: 1,
    imageSrc: Three,
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 4,
    name: "Strawberry",
    href: "#",
    color: "Blue",
    price: "2.0",
    quantity: 3,
    imageSrc: Four,
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 5,
    name: "Apple",
    href: "#",
    color: "Blue",
    price: "1.2",
    quantity: 1,
    imageSrc: Five,
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

export default function CartDrawer({ open, setOpen }) {
  return (
    <div className="CartDrawer">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setOpen}
          style={{ zIndex: 99 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className="ml-4">
                                          $
                                          {String(
                                            (
                                              Number(product.quantity) *
                                              Number(product.price)
                                            ).toFixed(2)
                                          )}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        ${product.price}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-red-500 hover:text-red-700"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#e5be70] px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-[#e5be70]"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or&nbsp;
                            <button
                              type="button"
                              className="font-medium text-[#e5be70]"
                              onClick={() => setOpen(false)}
                            >
                              Continue Ordering
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
