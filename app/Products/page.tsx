"use client";


import { useRouter } from "next/navigation";
import React from "react";

const products = [
  {
    id: 1,
    // name: "Smart Watch",
    // price: 2500,
    image: "/Goodwork.jpeg",
  },
  {
    id: 2,
    // name: "Gaming Mouse",
    // price: 1500,
    image: "/Goodwork1.jpeg",
  },
  {
    id: 3,
    // name: "Bluetooth Speaker",
    // price: 1800,
    image: "/Goodwork2.jpeg",
  },
  {
    id: 4,
    // name: "Bluetooth Speaker",
    // price: 1800,
    image: "/Goodwork3.jpeg",
  },
  {
    id: 5,
    // name: "Bluetooth Speaker",
    // price: 1800,
    image: "/Goodwork4.jpeg",
  },
  {
    id: 6,
    // name: "Bluetooth Speaker",
    // price: 1800,
    image: "/Goodwork5.jpeg",
  },
  {
    id: 7,
    // name: "Bluetooth Speaker",
    // price: 1800,
    image: "/Goodwork6.jpeg",
  },
  {
    id: 8,
    // name: "Bluetooth Speaker",
    // price: 1800,
    image: "/Goodwork7.jpeg",
  },
  {
    id: 9,
    // name: "Bluetooth Speaker",
    // price: 1800,
    image: "/Goodwork8.jpeg",
  },
  {
    id: 10,
    // name: "Bluetooth Speaker",
    // price: 1800,
    image: "/Goodwork9.jpeg",
  },
];

const Page = () => {
   const router = useRouter();
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl text-[#D4AB45] text-center font-bold mb-6">Finieshed Products</h1>

      <div className="lg:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border w-full rounded-lg p-4 shadow hover:shadow-xl transition duration-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
            <p className="text-gray-600">Price: {item.price || "Negotiable"}</p>

            <button
            onClick={()=>router .push('/Contactus')}
            className="mt-3 bg-[#D4AB45] text-white rounded px-4 py-2">
             Order now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
