"use client";

import { CheckOutlined } from "@ant-design/icons";
import { Col, Divider, Row } from "antd";
import React, { useState } from "react";

export default function Orders() {
  const [itemNo, setItemNo] = useState(null);
  return (
    <div>
      <div class="lg:container md:container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="mb-6 text-2xl font-semibold text-gray-800">
          Your Orders
        </div>
        <div class="-m-1 flex flex-wrap md:-m-2">
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} class="flex w-full flex-wrap mb-4">
              <div
                class="w-full p-1 md:p-2 border rounded cursor-pointer"
                style={{ border: itemNo === item && "1px solid black" }}
              >
                <div className="flex justify-between items-center p-3 bg-gray-100 text-sm">
                  <span>
                    Order Placed
                    <br />
                    <span className="text-green-800 font-semibold">
                      18 August 2023
                    </span>
                  </span>
                  <span>
                    Total
                    <br />
                    <span className="text-green-800 font-semibold">$5.21</span>
                  </span>
                  <span>
                    ORDERID
                    <br />
                    <span className="text-green-800 font-semibold">#1</span>
                  </span>
                </div>
                <Divider className="m-0" />
                <div className="flex justify-between items-center p-3 text-sm">
                  <div>
                    <span className="text-base text-green-800 font-semibold">
                      Arriving Monday
                    </span>
                    <div className="flex items-center mt-3">
                      <img
                        alt="gallery"
                        class="block h-10 w-10 rounded-lg object-cover object-center mr-2"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                      />
                      <span>Sliced Orange Fruit And Green Round Fruits</span>
                    </div>
                  </div>
                  <button
                    className="rounded-md bg-[#e5be70] text-black w-60 p-1"
                    onClick={() => {
                      if (itemNo === item) {
                        setItemNo(null);
                      } else {
                        setItemNo(item);
                      }
                    }}
                  >
                    Track Order
                  </button>
                </div>
              </div>

              {itemNo === item && (
                <div class="w-full block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50">
                  <div className="flex justify-between items-center p-3 text-sm">
                    <span>Order Details - 34651156</span>
                    <span>Cancel Order</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-100 text-sm">
                    <span>Order Status: Order Processing</span>
                    <span>Payment Status: Cash On Delivery</span>
                  </div>

                  <ul
                    data-te-stepper-init
                    class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
                  >
                    <li
                      data-te-stepper-step-ref
                      data-te-stepper-step-active
                      class="w-[4.5rem] flex-auto"
                    >
                      <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-green-700 after:content-[''] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
                      >
                        <span
                          data-te-stepper-head-icon-ref
                          class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-green-700 text-sm font-medium text-[#40464f]"
                        >
                          <CheckOutlined className="text-white" />
                        </span>
                      </div>
                      <span className="text-base font-semibold">
                        Order Pending
                      </span>
                    </li>

                    <li
                      data-te-stepper-step-ref
                      class="w-[4.5rem] flex-auto text-center"
                    >
                      <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-green-700 before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-green-700 after:content-[''] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
                      >
                        <span
                          data-te-stepper-head-icon-ref
                          class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-green-700 text-sm font-medium text-[#40464f]"
                        >
                          <CheckOutlined className="text-white" />
                        </span>
                      </div>
                      <span className="text-base font-semibold">
                        Order Processing
                      </span>
                    </li>

                    <li
                      data-te-stepper-step-ref
                      class="w-[4.5rem] flex-auto text-end"
                    >
                      <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
                      >
                        <span
                          data-te-stepper-head-icon-ref
                          class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                        >
                          3
                        </span>
                      </div>
                      <span className="text-base font-semibold">
                        Order Out For Delivery
                      </span>
                    </li>

                    <li
                      data-te-stepper-step-ref
                      class="w-[4.5rem] flex-auto text-end"
                    >
                      <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
                      >
                        <span
                          data-te-stepper-head-icon-ref
                          class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                        >
                          4
                        </span>
                      </div>
                      <span className="text-base font-semibold">
                        Order Completed
                      </span>
                    </li>
                  </ul>

                  <div className="mt-3">
                    <Row>
                      <Col lg={11} md={11} sm={24} xs={24}>
                        <div className="">
                          <div className="font-semibold mb-2">
                            Shipping Address
                          </div>
                          <div className="mb-5">
                            mermoz, Dakar, Dakar, 38169, Sénégal
                          </div>
                          <div className="font-semibold mb-2">
                            Billing Address
                          </div>
                          <div className="mb-5">
                            Voluptatum qui sunt, Quod et consequatur, Ipsum qui
                            minus sint, 51397, Aut fugiat iusto do
                          </div>
                        </div>
                      </Col>
                      <Col lg={2} md={2} sm={0} xs={0}>
                        <div className="h-full w-0 border m-auto"></div>
                      </Col>
                      <Col lg={0} md={0} sm={24} xs={24}>
                        <div className="h-0 w-full border mb-4"></div>
                      </Col>
                      <Col lg={11} md={11} sm={24} xs={24}>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <div>Sub Total</div>
                            <div>$5.00</div>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <div>Discount</div>
                            <div>$0.00</div>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <div>Delivery Fee</div>
                            <div>$50.00</div>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <div>Tax</div>
                            <div>$0.10</div>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <div>Total</div>
                            <div className="font-semibold">$55.10</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
