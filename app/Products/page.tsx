"use client";


import { useRouter } from "next/navigation";
import React from "react";
import Product from "./Product";
import MaterialsAndTech from "../home/MaterialsAndTech";


const Page = () => {
   const router = useRouter();
  return (
   <>
    <Product />
    <MaterialsAndTech />
     </>
  );
};

export default Page;
