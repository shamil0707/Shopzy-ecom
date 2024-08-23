import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SelectProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            {product.name} - ${product.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectProducts;