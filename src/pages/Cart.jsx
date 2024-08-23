import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { decrementQuantity,incrementQuantity } from '../redux/cartslice';
import { Link, useNavigate } from 'react-router-dom';
import useCartItems from '../hooks/useCartItems';
import CartItem from '../components/cartItem/cartItem';


function Cart (props)  {
   const [items,totalPrice] = useCartItems()
   const navigate = useNavigate()
    const dispatch = useDispatch()
  return (
    <main>
    <section className='container mx-auto px-4 py-10'>
          <h2 className='text-xl font-bold mb-4'>Shopping bag</h2>
          <button className='w-full bg-black text-white py-2 hover:bg-gray-800'onClick={() => navigate('/checkout')}> Continue to Checkout  - INR {totalPrice.toFixed(2)}
            
          </button>
         
          <div className='mt-8 flex flex-col'>
            {
                items.map(item =>{
                    return(
                      
                      <CartItem key={item.id} item={item}  />
                    
                    )
                })
            }

           
          </div>
          


        </section>

    </main>
        

    
  );
}


export default Cart;