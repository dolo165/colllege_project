import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import Catalog from '../pages/Catalog'
import ProductPage from '../pages/ProductPage'
import Products from "../pages/Products.jsx"
import Header from "../components/header/Header.jsx";
import Delivery from "../pages/Delivery.jsx";
import Basket from "../pages/Basket.jsx";
import Category from "../pages/Category.jsx";
import Contacts from "../pages/Contacts.jsx";
import Brends from "../pages/Brends.jsx";
import Footer from "../components/footer/Footer.jsx";
import Authorization from "../components/auth/Authorization.jsx";
import Registration from "../components/auth/Registration.jsx";
import Feedback from "../pages/Feedback.jsx";
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
    path: `/brands`,
    element: (
      <div>
        <Header />
        <Brends />
        <Footer />
      </div>
    )
    },
  
    {
      path: `contacts`,
      element: (
        <div>
          <Header />
          <Contacts />
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
    path: `/registration`,
    element: (
      <div>
        <Header />
        <Registration />
        <Footer />
      </div>
    )
  },
  {
  path: `/productpage`,
  element: (
    <div>
      <Header />
      <ProductPage />
      <Footer />
    </div>
  )
  },
  {
  path: `/feedback`,
  element: (
    <div>
      <Header />
      <Feedback />
      <Footer />
    </div>
  )
  },
  {
    path: `/delivery`,
    element: (
      <div>
        <Header />
        <Delivery />
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
    element: <div>
    <Header />
    <ProductPage />
    <Footer />
  </div>  
  },

  {
    path: `/category/:category`,
    element: <Category />
  }
]);

export default router;