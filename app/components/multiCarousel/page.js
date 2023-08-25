"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import "./styles.css";

export default function MultiCarousel() {
  const [activeTab, setActiveTab] = useState(1);

  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };

  const categories = [
    "Food",
    "Service",
    "Retail",
    "Food",
    "Service",
    "Retail",
    "Food",
    "Service",
    "Retail",
    "Food",
    "Service",
    "Retail",
    "Food",
    "Service",
    "Retail",
    "Food",
    "Service",
    "Retail",
  ];

  return (
    <div className="bg-white pt-2 multiCarousel">
      <Tabs activeTab={activeTab} onTabClick={onTabClick}>
        {categories.map((item, index) => (
          <Tab key={index}>{item}</Tab>
        ))}
      </Tabs>
    </div>
  );
}
