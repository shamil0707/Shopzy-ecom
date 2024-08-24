import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductsByCategory = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products by category
        if (categoryId) {
            axios.get(`http://localhost:3000/api/v1/products/category/${categoryId}`)
                .then(response => setProducts(response.data))
                .catch(error => console.error('Error fetching products:', error));
        }
    }, [categoryId]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product._id} className="border rounded-lg p-4 shadow-md">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-gray-700 mb-2">Price: ${product.price}</p>
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsByCategory;
