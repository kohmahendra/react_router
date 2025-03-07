import React from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <NavLink
                to="/products/info/1"
                className="nav-link active"
                aria-current="page"
              >
                1
              </NavLink>
            </th>
            <td>
              HP OmniBook Ultra Flip 2-in-1 Laptop Next Gen AI PC 14t-fh000, 14
            </td>
            <td>1,449.99</td>
          </tr>
          <tr>
            <th scope="row">
              <NavLink
                to="/products/info/2"
                className="nav-link active"
                aria-current="page"
              >
                2
              </NavLink>
            </th>
            <td>Inspiron 16 Plus Laptop</td>
            <td>$799.99</td>
          </tr>
          <tr>
            <th scope="row">
              <NavLink
                to="/products/info/3"
                className="nav-link active"
                aria-current="page"
              >
                3
              </NavLink>
            </th>
            <td>Apple 2022 MacBook Air Laptop with M2 chip</td>
            <td>$799</td>
          </tr>
          <tr>
            <th scope="row">
              <NavLink
                to="/products/info/4"
                className="nav-link active"
                aria-current="page"
              >
                4
              </NavLink>
            </th>
            <td>Lenovo IdeaPad Slim 3 Chromebook Laptop</td>
            <td>$239.0</td>
          </tr>
        </tbody>
      </table>

  );
};

export default Products;
