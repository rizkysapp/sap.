"use client";

import React, { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { PreloadProvider } from "@/context/PreloadContext";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <PreloadProvider>
        <div>{children}</div>
      </PreloadProvider>
      <Footer />
    </>
  );
};

export default Layout;
