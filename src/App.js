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
import RootLayout from "./layout/RootLayout";
import ProductLayout from "./layout/ProductLayout";
import ProductInfo from "./pages/ProductInfo";
import PageNotFound from "./layout/PageNotFound";
import Housing, { housingLoader } from "./pages/Housing";
import HousingLayout from "./layout/HousingLayout";
import HousingDetails, { housingDetailsLoader } from "./pages/HousingDetails";
import Loading from "./pages/Loading";
import MyRouteError from "./pages/MyRouteError";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} hydrateFallbackElement={<Loading/>}>
         {/*hydrateFallbackElement means, during page load, it shows this loading componennt. You will learn this during loader */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductLayout />}>
          <Route path="info/:id" element={<ProductInfo />} />
          {/* <Route path="test" element={<TestPage />} />  you can difine any number of routes*/}
        </Route>
        <Route path="housing" element={<HousingLayout />}>
          <Route index element={<Housing />} loader={housingLoader} />
          <Route
            path=":id"
            element={<HousingDetails />}
            loader={housingDetailsLoader}
            errorElement={<MyRouteError/>}
          />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
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
