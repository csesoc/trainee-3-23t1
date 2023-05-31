import React from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen w-full flex-row overflow-y-hidden overflow-x-clip bg-secondary">
      <Sidebar />
      <section className="w-full overflow-x-clip overflow-y-scroll">
        {children}
      </section>
    </main>
  );
};

export default Layout;
