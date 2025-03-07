import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <Outlet/>
      </div>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
