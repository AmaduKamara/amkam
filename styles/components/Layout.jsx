import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-16 layout-main">
        <div>{children}</div>
        <div className="social-medias">
          <h1>Social Media Icons</h1>
        </div>
      </main>
    </div>
  );
};

export default Layout;
