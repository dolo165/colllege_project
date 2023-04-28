import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import Catalog from '../pages/Catalog'
import ProductPage from '../pages/ProductPage'
import Products from "../pages/Products.jsx"
import Header from "../components/header/Header.jsx";
import Basket from "../pages/Basket.jsx";
import Category from "../pages/Category.jsx";
import Footer from "../components/footer/Footer.jsx";
import Authorization from "../components/auth/Authorization.jsx";
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

        <Catalog />
      
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
  path: `/ProductPage`,
  element: (
    <div>
      <Header />
      <ProductPage />
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
  {
    path: `/products/:id`,
    element: <ProductPage />
  },

  {
    path: `/category/:category`,
    element: <Category />
  }
]);

export default router;