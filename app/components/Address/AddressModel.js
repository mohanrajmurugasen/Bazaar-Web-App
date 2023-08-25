"use client";
import React, { useState } from "react";
import { Input, Modal, Radio } from "antd";
import "./modelStyle.css";

export default function AddressModel({ setIsModalOpen, isModalOpen }) {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { TextArea } = Input;
  return (
    <div>
      <Modal
        className="AddressModel"
        open={isModalOpen}
        onCancel={handleCancel}
        closable={false}
        width={450}
        centered
        footer={[
          <button
            className="rounded bg-[#e5be70] text-black w-3/4 text-base p-1"
            key="back"
          >
            Update
          </button>,
        ]}
      >
        <div className="font-semibold text-lg text-center">Add New Address</div>
        <div className="text-sm mt-4">
          <div className="mb-4">
            <div className="mb-2">Type</div>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Billing</Radio>
              <Radio value={2}>Shipping</Radio>
            </Radio.Group>
          </div>
          <div className="mb-4">
            <div className="mb-2">Title</div>
            <Input />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <div className="mb-2 addressGrid">
              <div>Country</div>
              <Input />
            </div>
            <div className="mb-2 addressGrid">
              <div>City</div>
              <Input />
            </div>
          </div>
          <div className="mb-4 flex justify-between items-center">
            <div className="mb-2 addressGrid">
              <div>State</div>
              <Input />
            </div>
            <div className="mb-2 addressGrid">
              <div>ZIP</div>
              <Input />
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-2">Street Address</div>
            <TextArea rows={4} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
