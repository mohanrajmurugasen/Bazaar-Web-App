"use client";
import React, { useState } from "react";
import ProductQuickView from "../ProductQuickView/page";
import Link from "next/link";
import { Col, Row } from "antd";
import "./style.css";
import { EyeFilled } from "@ant-design/icons";

const style = {
  padding: "8px 0",
};

export default function ProductList({ productLists }) {
  const [openView, setOpenView] = useState(false);
  const [count, setCount] = useState(0);
  console.log(productLists);

  return (
    <div className="AllProductList">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {productLists &&
          productLists.map((product) => (
            <Col
              key={product.id}
              className="gutter-row mb-4"
              lg={8}
              md={8}
              sm={12}
              xs={24}
            >
              <div style={style}>
                <div>
                  {/* <Link href={"/components/ProductOverview"}> */}
                  <Link href={"#"}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                      <div class="image-container">
                        <img
                          src={product.urls.raw}
                          alt={product.urls.raw}
                          className="max-h-56 w-full object-cover object-center group-hover:opacity-75"
                        />
                        <div class="hover-offer">
                          {/* <EyeFilled /> */}
                          <button
                            className="rounded text-black font-semibold text-sm p-1 bg-[#e5be70]"
                            onClick={() => setOpenView(true)}
                          >
                            20%
                          </button>
                        </div>
                        <div class="hover-quickView">
                          {/* <EyeFilled /> */}
                          <button
                            className="rounded text-black font-semibold text-base p-1 bg-[#e5be70] w-40"
                            onClick={() => setOpenView(true)}
                          >
                            Quick View
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-between items-center mt-2">
                    {/* <p className="text-base font-medium text-gray-900">$48</p> */}
                    <p className="text-base text-gray-900 capitalize overflow-hidden">
                      {product.alt_description}
                    </p>
                    <div className="w-28 flex justify-between items-center">
                      {count !== 0 && (
                        <button
                          className="rounded-none text-black font-semibold text-base p-1 bg-[#e5be70] w-8"
                          onClick={() => setCount(count - 1)}
                        >
                          -
                        </button>
                      )}
                      <button
                        className={`rounded-none text-black ${
                          count === 0 ? "font-medium" : "font-semibold"
                        } text-base p-1 ${
                          count === 0 ? "w-20" : "w-12"
                        } bg-[#fee6b6]`}
                        onClick={() => {
                          if (count === 0) {
                            setCount(count + 1);
                          }
                        }}
                      >
                        {count === 0 ? "Add" : count}
                      </button>
                      <button
                        className="rounded-none text-black font-semibold text-base p-1 bg-[#e5be70] w-8"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
      </Row>
      <ProductQuickView openView={openView} setOpenView={setOpenView} />
    </div>
  );
}
