import React, { Fragment } from "react";
import Products from "../pages/Products";
import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <Fragment>
      <Products />
      <Outlet />
    </Fragment>
  );
};

export default ProductLayout;
