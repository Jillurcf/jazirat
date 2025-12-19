"use client";

import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#000000" }}>
      © 2017 Jazirat Al. All rights reserved.
    </Footer>
  );
};

export default AppFooter;
