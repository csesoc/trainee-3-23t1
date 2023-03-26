import React from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen w-full flex-row gap-8 ">
      <Sidebar />
      <section className="py-8">{children}</section>
    </main>
  );
};

export default Layout;
