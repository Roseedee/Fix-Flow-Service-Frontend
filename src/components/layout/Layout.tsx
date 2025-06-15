import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

import '@styles/components/layout/Layout.css';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        <Header />
        <div className="layout-main">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
