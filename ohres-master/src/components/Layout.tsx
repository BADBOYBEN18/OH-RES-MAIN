import React from 'react';
import { Nav } from './Nav';
// import { Footer } from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Nav />
      {children}
      {/* <Footer year={currentYear} /> */}
    </div>
  );
};

export default Layout;