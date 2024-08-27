import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProductForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories to populate the select dropdown
        axios.get(`${import.meta.env.VITE_BASE_URL}/categories`,{withCredentials:true})
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const onSubmit = async (data) => {
        try {
            // Create FormData to handle file upload
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('price', data.price);
            formData.append('description', data.description);
            formData.append('categoryId', data.categoryId);
            formData.append('picture', data.picture[0]); // Append the image file

            // Post the form data to your backend
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products` , formData, {withCredentials:true}, { 
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Product added successfully');
            reset();
        } catch (error) {
            console.error('Error adding product:', error);
        }
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
                <label className="block text-gray-700">Product Image</label>
                <input {...register('picture', { required: true })} type="file" className="w-full p-2 border rounded" />
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
