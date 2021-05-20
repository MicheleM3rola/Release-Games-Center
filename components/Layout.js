import React from "react";
import Navbar from "./Navbar";
import layoutStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
