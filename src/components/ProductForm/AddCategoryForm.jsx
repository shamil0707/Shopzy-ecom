import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddCategoryForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/categories`, data,{withCredentials:true});
            alert('Category added successfully!');
        } catch (error) {
            console.error('Error adding category:', error);
            alert('Failed to add category');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Category Name</label>
                <input
                    id="name"
                    {...register('name', { required: 'Category name is required' })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            
            <div className="mb-4">
                <label htmlFor="thumbnail" className="block text-gray-700 font-bold mb-2">Thumbnail URL</label>
                <input
                    id="thumbnail"
                    {...register('thumbnail')}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Add Category
            </button>
        </form>
    );
};

export default AddCategoryForm;