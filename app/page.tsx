// app/page.tsx
import React from "react";
import NavBar from "./home/NavBar";
import Banner from "./home/Banner";
import ProductCategory from "./home/ProductCategory";

const Page = () => {
  return (
    <div className="flex flex-col">
  

      {/* Banner and products */}
      <Banner />
      <ProductCategory />
    </div>
  );
};

export default Page;
