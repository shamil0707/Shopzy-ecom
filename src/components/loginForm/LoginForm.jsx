import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`,data,{withCredentials: true})
        .then(res => {
            console.log(res)
        })
        .catch(error=>{
            console.log(error)

        })
        // Here you would typically dispatch an action or call an API to log in the user
    };

    return (
        <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="text-red-600 mt-1">{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
