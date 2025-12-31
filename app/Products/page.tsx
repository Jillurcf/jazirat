"use client";


import { useRouter } from "next/navigation";
import React from "react";
import Product from "./Product";


const Page = () => {
   const router = useRouter();
  return (
    <Product />
  );
};

export default Page;
