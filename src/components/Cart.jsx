import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/cartslice';
import { Link, useNavigate } from 'react-router-dom';
import useCartItems from '../hooks/useCartItems';
import CartItem from './cartItem/cartItem';
import axios from "axios";
import { redirect } from "react-router-dom";


export async function checkoutLoader() {
  try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`, { withCredentials: true });
      const userData = res.data;
      return { userData };
  } catch (error) {
      return redirect('/login');
  }
}





function Cart(props) {
    const [items, totalPrice] = useCartItems();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState(false)


    const handleCheckout = async () => {
      try {
          const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`, { withCredentials: true });
          if (res.status === 200) {
              navigate('/checkout');
          } else {
              navigate('/login');
          }
      } catch (error) {
          navigate('/login');
      }
  };





    return (
        <main>
            <section className='container mx-auto px-4 py-10'>
                <h2 className='text-xl font-bold mb-4'>Shopping bag</h2>
                <button className='w-full bg-black text-white py-2 hover:bg-gray-800' onClick={() => navigate('/checkout')}>
                    Continue to Checkout - INR {totalPrice.toFixed(2)}
                </button>

                <div className='mt-8 flex flex-col'>
                    {items.map((item, index) => (
                        <CartItem key={item.id || index} item={item} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Cart;
