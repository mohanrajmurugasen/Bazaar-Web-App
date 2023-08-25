"use client";
import React, { useState } from "react";
import {
  CloseCircleOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Divider, Drawer } from "antd";
import Image from "next/image";
import One from "./images/1.jpeg";
import Two from "./images/2.jpeg";
import Three from "./images/3.jpeg";
import Four from "./images/4.jpeg";
import Five from "./images/5.jpeg";
import CartDrawer from "./CartDrawer";

const list = [
  { name: "Mixed Fruits", quantity: 1, price: 2.2, image: One },
  { name: "Assorted Fruits", quantity: 2, price: 0.8, image: Two },
  { name: "Banana", quantity: 1, price: 1.1, image: Three },
  { name: "Strawberry", quantity: 1, price: 2.0, image: Four },
  { name: "Apple", quantity: 3, price: 1.2, image: Five },
];

export default function Cart() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="p-2 rounded bg-[#e5be70] cart">
        <div className="justify-between flex items-center text-black">
          <ShoppingCartOutlined /> <div>11 Items</div>
        </div>

        <button
          type="button"
          className="rounded p-2 bg-white w-full mt-2"
          onClick={showDrawer}
        >
          $0.00
        </button>
      </div>
      <CartDrawer open={open} setOpen={setOpen} />
    </>
  );
}
