import React from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-full w-screen flex-row">
      <Sidebar />
      <section className="w-full py-8">{children}</section>
    </main>
  );
};

export default Layout;
