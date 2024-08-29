import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import store from './redux/store'
import { Provider } from "react-redux";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import CartItem from "./components/cartItem/cartItem";
import Checkout  from "./components/Checkout";
import { checkoutLoader } from "./components/Cart";
import Order from "./components/Order";

import ProductDetails from "./components/ProductDetails";
import AddCategoryForm from "./components/ProductForm/AddCategoryForm";
import AddProductForm from "./components/ProductForm/AddProductForm";
import ProductsByCategory from "./components/ProductForm/ProductsByCategory";
import LoginPage from "./components/LoginPage";
import SelectProducts from "./components/SelectProducts";
import Cart from "./components/Cart";
import Profile, {loader as profileLoader} from "./routes/profile";
import SignUp from "./components/signup";
import Logout from "./routes/logout";






const router = createBrowserRouter([
 
{
  path:'/',
  element: <Root/>,
  children: [
{
  path: '/',
  element: <Home />
},
{
  path:'/category/:categoryId',
  element: <ProductList/>
  
},
{
  path: '/product',
  element: <Product/>
},
{
  path: '/cart',
  element: <Cart/>
},

{
  path:'/checkout',
  element:<Checkout  />,
  loader:checkoutLoader,
  
},
{
  path: '/order-confirmation',
  element:<Order/>
},
{
  path: '/select-products',
  element:<SelectProducts/>

},
{
  path: '/product/:productId',
  element:<ProductDetails/>
},
{
  path: "/add-category",
  element: <AddCategoryForm/>
},
{
  path: "/add-product",
  element:<AddProductForm/>
},
{
  path: '/category/:categoryId',
  element: <ProductsByCategory/>
},
{
  path: '/login',
  element:<LoginPage/>

},
{
  path:'/signup',
  element: <SignUp/>
},
{
  path: '/logout',
  element: <Logout/>
},
{
  path: '/profile',
  element:<Profile/>,
  loader: profileLoader
},


  ]
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)