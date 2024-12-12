import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" bg-indigo gap-5 flex flex-column items-center justify-center h-screen ">
      {children}
    </div>
  );
};

export default Layout;