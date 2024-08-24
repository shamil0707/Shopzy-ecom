import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProductForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories to populate the select dropdown
        axios.get('http://localhost:3000/api/v1/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const onSubmit = data => {
        axios.post('http://localhost:3000/api/v1/products', data)
            .then(response => {
                alert('Product added successfully');
                reset();
            })
            .catch(error => console.error('Error adding product:', error));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Product Name</label>
                <input {...register('name', { required: true })} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input {...register('price', { required: true })} type="number" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input {...register('image', { required: true })} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea {...register('description', { required: true })} className="w-full p-2 border rounded"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <select {...register('categoryId', { required: true })} className="w-full p-2 border rounded">
                    <option value="">Select a Category</option>
                    {categories.map(category => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Product
            </button>
        </form>
    );
};

export default AddProductForm;
