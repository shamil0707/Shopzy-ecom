import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartslice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const dispatch = useDispatch()
    const [showDescription, setShowDescription] = useState(false);
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productId) {
            axios.get(`http://localhost:3000/api/v1/products/${productId}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error('Error fetching product details:', error));
        }
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
    {/* Product Image */}
    <div className="flex flex-col md:flex-row md:space-x-8">
        <img className="w-full md:w-1/2 rounded-lg shadow-md" src={product.image} alt={product.name} />
        {/* Product Info */}
        <div className="mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h2>
            <p className="text-xl text-gray-600 mb-4">Price: ${product.price}</p>
            <p className="text-lg text-gray-500 mb-4">Category: {product.category.name}</p>
            <button onClick={() => dispatch(addToCart(product))}  className='bg-black text-white text-sm px-3 py-3 rounded-md hover:bg-gray-800 '>Add To Cart</button>

            {/* Description Toggle */}
            <div className="mt-6">
                <button
                    onClick={() => setShowDescription(!showDescription)}
                    className="w-full text-left bg-gray-100 py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                    {showDescription ? 'Hide Description' : 'Show Description'}
                </button>
                {showDescription && (
                    <div className="mt-4 text-gray-700">
                        <p>{product.description}</p>
                    </div>
                )}
            </div>
        </div>
    </div>
</div>
    );
};

export default ProductDetails;