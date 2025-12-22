"use client";

import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#D4AB45" }}>
     <h1 className="text-[#FFFFFF] text-[12px] lg:text-[14px] py-2"> © 2017 Jazirat Al Aibriz Al Khalis. All rights reserved.</h1>
    </Footer>
  );
};

export default AppFooter;
