import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
const Product = ({ product }) => {



    return (
        
            <article className='p-4 shadow-md rounded-sm flex flex-col justify-between'>
                <Link to={`/product/${product._id}`}>
                <img className='w-full aspect-[3/4] object-contain ' src={product.image} alt="" />
                </Link>
            <h3 className='text-sm font-bold mt-5'>{product.name}</h3>
            <div className='flex flex-row justify-between items-center mt-2'>
            <p className='text-sm text-gray-800'>Price: ${product.price}</p>
            
            </div>

            </article>
            
        
    );
};

export default Product;