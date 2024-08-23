import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 '>
            
            
                {categories.map(category => (
                    <div key={category._id} className='relative h-64 transition-transform duration-300 hover:scale-105'>
                        <Link to={`/category/${category._id}`}>
                            
                            <img src={category.thumbnail} className='w-full h-full object-cover rounded-lg shadow-lg border' alt=""  />
                            <div className='absolute top-20 left-12'>
                                <p className='text-2xl text-white font-bold py-4 px-1 mt-5'>{category.name}</p>
                                <button  className='bg-black rounded px-8 py-1.5 text-white mt-10 font-bold hover:bg-blue-200 transform transition-transform duration-300 hover:scale-105'> View </button>
                            </div>
                        </Link>
                    </div>
                ))}
           
        </div>
    );
};

export default CategoryList;