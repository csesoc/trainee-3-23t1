import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="flex h-screen w-full flex-row overflow-y-hidden overflow-x-clip">
      {loggedIn && <Sidebar />}
      <main className="w-full overflow-x-clip overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default Layout;
