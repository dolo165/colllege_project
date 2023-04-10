import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import Catalog from '../pages/Catalog'
import ProductPage from '../pages/ProductPage'
import Products from "../pages/Products.jsx"
import Header from "../components/header/Header.jsx";
import Basket from "../pages/Basket";
import Footer from "../components/footer/Footer.jsx";
import Authorization from "../components/auth/Authorization";
const router = createBrowserRouter([
  {
    path: `/`,
    element: (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
      
    )
  },
  {
    path: `/catalog`,
    element: (
      <div>
        <Header />
        <Catalog />
        <Footer />
      </div>
    
    )
  },
  {
    path: `/products`,
    element: (
      <div>
        <Header />
        <Products />
        {/* <Authorization /> */}
        <Footer />
      </div>
    )
  },
  {
    path: `/basket`,
    element: (
      <div>
        <Header />
        <Basket />
        <Footer />
      </div>
    )
  },
  {
    path: `/authorization`,
    element: (
      <div>
        <Header />
        <Authorization />
        <Footer />
      </div>
    )
  },
  {
    path: `/product`,
    element: (
      <div>
        <Header />
        <ProductPage />
        <Footer />
      </div>
    )
  },
  

]);

export default router;