import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';

const ProductList = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            axios.get(`http://localhost:3000/api/v1/products/category/${categoryId}`)
                .then(response => setProducts(response.data))
                .catch(error => console.error('Error fetching products:', error));
        }
    }, [categoryId]);

    return (
        <div className='container mx-auto px-4 py-10'>
           
            
            {products.length === 0 ? (
                <p>No products found for this category</p>
            ) : (
                <div className='grid grid-cols-4 lg:grid-cols-4 gap-3 mt-8  '>
                    {products.map(product => (
                        <Product key={product._id} product={product} />
                        
                    ))}
                    
                </div>
                
            )}
            
        </div>
    );
};

export default ProductList;