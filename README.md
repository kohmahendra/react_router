# Install Bootstrap

npm i bootstrap

# Install React router DOM

npm i react-router-dom

# Axios
 npm i axios

# Json Server
***********************************************************************************************************************************************
PS C:\frontend\react_router\src\data> npx json-server --watch house-price.json --port 5000
Need to install the following packages:
json-server@1.0.0-beta.3
Ok to proceed? (y) y
--watch/-w can be omitted, JSON Server 1+ watches for file changes by default
JSON Server started on PORT :5000
Press CTRL-C to stop
Watching house-price.json...

(˶ᵔ ᵕ ᵔ˶)

Index:
http://localhost:5000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:5000/0
http://localhost:5000/1
http://localhost:5000/2
....

***********************************************************************************************************************************************

# Install React Snippets in VS Code

ES7+ React/Redux/React-Native snippets
you can use rafce shortcut to create components

# Router Started (Style 1) ******************************************************************************************

in Index.js add below BrowserRouter tag

<BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
</BrowserRouter>

in App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

# in Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item"><Link to="/"  className="nav-link active" aria-current="page">Home</Link></li>
            <li className="nav-item"><Link to="/products" className="nav-link active" aria-current="page">Products</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link active" aria-current="page">Contact</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link active" aria-current="page">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

# Router (Style 2) ******************************************************************************************

1) in Index.js remobe below BrowserRouter tag


    <React.StrictMode>
      <App />
    </React.StrictMode>

2) Create a component RootLayout as below

import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <div class="container-fluid">
        <Outlet/>
      </div>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;

3) In App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./layout/RootLayout";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Route>
    )
  );
  return (
    <div className="container-fluid">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

4) The differece between Link and NavLink tag is NavLink add's active css class on selected link (inspect in browser and see active css like below)
    <a class="nav-link active" href="/products">Products</a>