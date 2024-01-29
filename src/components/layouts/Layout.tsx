
import React, { ReactNode } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <main>{children}</main>
      <Footer/>  
    </div>
  );
};

export default Layout;
