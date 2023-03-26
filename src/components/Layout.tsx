import React from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen w-full flex-row">
      <Sidebar />
      <section className="h-full w-full overflow-y-scroll pb-8">
        {children}
      </section>
    </main>
  );
};

export default Layout;
