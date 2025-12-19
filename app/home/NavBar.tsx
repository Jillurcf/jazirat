"use client";

import React, { useState } from "react";
import { Menu, ConfigProvider } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation"; // Next.js 13 App Router

const items: MenuProps["items"] = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Products", key: "products" },
  { label: "Contact Us", key: "contact" },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);

    // Navigate based on the key
    switch (e.key) {
      case "home":
        router.push("/"); // Home page
        break;
      case "about":
        router.push("/Aboutus"); // About page
        break;
      case "products":
        router.push("/Products"); // Products page
        break;
      case "contact":
        router.push("/Contactus"); // Contact page
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full flex items-center justify-around bg-white px-6">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="h-10 w-auto" />

      {/* Menu */}
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedColor: "#16a34a", // selected text color
              itemHoverColor: "#16a34a", // hover text color
              horizontalItemSelectedColor: "#16a34a",
              horizontalItemHoverColor: "#16a34a",
              activeBarBorderWidth: 2,
              activeBarHeight: 2,
              activeBarColor: "#16a34a", // underline color
            },
          },
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="border-none"
        />
      </ConfigProvider>
    </div>
  );
};

export default App;
