// app/page.tsx
import React from "react";
import NavBar from "./home/NavBar";
import Banner from "./home/Banner";
import ProductCategory from "./home/ProductCategory";
import MasterHistory from "@/components/ui/hmeCard/MasterHistory";

const Page = () => {
  return (
    <div className="flex flex-col">
  

      {/* Banner and products */}
      <Banner />
      <ProductCategory />
      <MasterHistory />
    </div>
  );
};

export default Page;
