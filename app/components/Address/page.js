"use client";
import React, { useState } from "react";
import { Button } from "antd";
import AddressModel from "./AddressModel";

export default function Address() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <AddressModel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
