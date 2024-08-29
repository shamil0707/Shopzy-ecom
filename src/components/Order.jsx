import React from 'react'
import useCartItems from '../hooks/useCartItems'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

const Order = () => {
    const {order,setOrder} = useOutletContext()
    const navigate = useNavigate()
    const [items,totalPrice] = useCartItems() 
    
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
        <p>Your order has been placed successfully  </p>
        <div className='mt-6 p-4 border rounded-lg bg-slate-300'>
            <h3 className='text-lg font-semibold mb-2'> Order Summary </h3>
            <p>Order Number:{order.orderNumber}</p>
            <div className='mt-4'>
                <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
                <p>{order.shippingInformation.address}</p>
                <p>{order.shippingInformation.city}</p>
                <p>{order.shippingInformation.zip}</p>
            </div>
            <div className='mt-4'>
                <h4 className='text-md font-semibold mb-2'>Items Ordered</h4>
               {order.items.map(item =>(
                <div>
                    <p>{item.name} x {item.quantity}</p>
                    <div>
                    {item.price} * {item.quantity} = {item.price * item.quantity } 
                    </div>
                    

                </div>
                
               ))}
              
            </div>
            <div className='mt-4 flex justify-between'>
                <span>Total Price:</span>
                <span className='font-semibold'>${totalPrice}</span>
                
                
            </div>
            <div className='mt-6'>
                <button className='bg-green-600 text-white py-2 px-4 hover:bg-green-700 rounded'>Track Order</button>
                
                <button className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800 rounded'
                onClick={()=>navigate('/')}>
                    Continue Shopping</button>
                
                
            </div>
        </div>

    </div>
  )
}

export default Order