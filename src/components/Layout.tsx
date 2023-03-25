import React from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode,
};

const Layout = ({ children } : LayoutProps) => {
  return (
    <main className="flex flex-row gap-8 py-8">
      <Sidebar />
      <section>
        { children }
      </section>
    </main>
  )
};

export default Layout;