import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link to={`/product/${product._id}`}>
                <div className="relative group">
                    <img
                        src={product.picture.secure_url}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                        {product.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-gray-700 group-hover:text-gray-500 transition-colors duration-300">
                            ${product.price}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;
