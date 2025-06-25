import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-40">{children}</div>
  );
};

export default Layout;
