// app/page.tsx
import React from "react";
import NavBar from "./home/NavBar";
import Banner from "./home/Banner";
import ProductCategory from "./home/ProductCategory";
import MasterHistory from "@/components/ui/hmeCard/MasterHistory";
import VideoSection from "@/components/Video/VideoSection";

const Page = () => {
  return (
    <div className="flex flex-col">
  

      {/* Banner and products */}
      <Banner />
      <ProductCategory />
      <VideoSection />
      <MasterHistory />
    </div>
  );
};

export default Page;
