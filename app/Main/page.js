import React from "react";
import Cart from "../components/Cart/page";
import Offers from "../components/offers/page";
import AllProducts from "../components/AllProducts/page";
import Footer from "../components/footer/page";
import Navbar from "../components/Navbar/page";

export default function Main() {
  return (
    <div>
      <Navbar SlideCategory={true} />
      <Cart />
      <Offers />
      <AllProducts />
      <Footer />
    </div>
  );
}
