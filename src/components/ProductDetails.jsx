import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartslice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const [showDescription, setShowDescription] = useState(false);
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [alreadyInCart, setAlreadyInCart] = useState(false);

    // Get cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        if (productId) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error('Error fetching product details:', error));
        }
    }, [productId]);

    const handleAddToCart = () => {
        const itemInCart = cartItems.find(item => item._id === product._id);

        if (itemInCart) {
            setAlreadyInCart(true);
        } else {
            dispatch(addToCart(product));
            setAlreadyInCart(false);
        }
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
            {/* Product Image */}
            <div className="flex flex-col md:flex-row md:space-x-8">
                <img className="w-full md:w-1/2 rounded-lg shadow-md" src={product.picture.secure_url} alt={product.name} />
                {/* Product Info */}
                <div className="mt-4 md:mt-0">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h2>
                    <p className="text-xl text-gray-600 mb-4">Price: ${product.price}</p>
                    <p className="text-lg text-gray-500 mb-4">Category: {product.category.name}</p>

                    <button 
                        onClick={handleAddToCart} 
                        className='bg-black text-white text-sm px-3 py-3 rounded-md hover:bg-gray-800'>
                        Add To Cart
                    </button>

                    {alreadyInCart && (
                        <p className="mt-2 text-red-600">Item is already in the cart!</p>
                    )}

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
