import React from "react";
import { Outlet } from "react-router-dom";

const HousingLayout = () => {
  return (
    <div>
      <h2>Housing</h2>
      <Outlet />
    </div>
  );
};

export default HousingLayout;
