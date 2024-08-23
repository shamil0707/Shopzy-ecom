import React from 'react'
import { useSelector } from 'react-redux';

function useCartItems (props) {
    const items = useSelector(state => state.cart.items)
    const totalPrice = items.reduce((total,item)=>{
        return total + item.quantity * item.price
  
      },0)
    


    return [items, totalPrice]

  
       
}

export default useCartItems; 