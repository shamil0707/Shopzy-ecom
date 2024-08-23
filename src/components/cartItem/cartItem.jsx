import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { incrementQuantity,decrementQuantity } from '../../redux/cartslice';


function CartItem(props) {
    const item = props.item

    const dispatch = useDispatch()
  return (
    <>
    <article key={item.id} className='flex flex-row items-center gap-4 border mt-10 rounded-md py-4'>
                        <img className='w-32 h-32 aspect-square object-contain' src={item.image} alt="" />
                        <div className=''>
                        <h3 className='font-semibold'>{item.name}</h3>
                        <h2>${item.price}</h2>
                        <div className='flex flex-row mt-5'>                   
                        <button onClick={()=>dispatch(decrementQuantity(item._id))} className='w-6 rounded-sm h-6 flex flex-row items-center justify-center bg-slate-300 '>-</button>
                        <span className='w-6 h-6 text-xs text-gray-700 flex flex-row items-center justify-center  '>{item.quantity}</span>
                        <button onClick={()=>dispatch(incrementQuantity(item._id))} className='w-6 h-6 flex rounded-sm flex-row items-center justify-center bg-slate-300 '>+</button>
                        </div>                                            
                       </div>                                       
                    </article>
                    
                    
   </>                 
  );
}

export default CartItem;