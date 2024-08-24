import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CategoryList from "./pages/CategoryList"
import ProductList from "./pages/ProductList"
import Product from "./components/Product"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import Order from "./pages/Order"
import ProductDetails from "./components/ProductDetails"
import SelectProducts from "./pages/SelectProducts"
import AddCategoryForm from "./components/ProductForm/AddCategoryForm"
import AddProductForm from "./components/ProductForm/AddProductForm"
import ProductsByCategory from "./components/ProductForm/ProductsByCategory"



function App() {
  const [order,setOrder] = useState(null)

  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    
    <Route path="/" element={<Home /> }></Route>
    <Route path="/category/:categoryId" element={<ProductList/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
    <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
    <Route path="/select-products" element={<SelectProducts />} />
    <Route path="/product/:productId" element={<ProductDetails />}></Route>
    <Route path="/add-category" element={<AddCategoryForm />}></Route>
    <Route path="/add-product" element={<AddProductForm />}></Route>
    <Route path="/category/:categoryId" element={<ProductsByCategory />}></Route>
    

   </Routes>
   
   </BrowserRouter>
  )
}

export default App
