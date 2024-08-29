import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import useCartItems from '../hooks/useCartItems'
import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Checkout = () => {
    const navigate = useNavigate()
    const { setOrder } = useOutletContext();
    const cart = useSelector(state => state.cart)
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const [items, totalPrice] = useCartItems()
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        zip: ''
    })

    // React Hook Form setup
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        mode: 'onChange' // To check validity on each change
    });

    const watchPaymentMethod = watch('paymentMethod', 'cod'); // Watch payment method field

    const onSubmit = (data) => {
        const newOrder = {
            items: cart.items,
            orderNumber: '1234',
            shippingInformation: shippingInfo,
            totalPrice: totalPrice,
            ...data
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    {/* Billing Information */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Name</label>
                                <input type="text" name="name" placeholder='Enter Name' className='w-full px-3 py-2 border' {...register('name', { required: 'Name is required' })} />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input type="email" name="email" placeholder='Enter Email' className='w-full px-3 py-2 border' {...register('email', { required: 'Email is required' })} />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className='block text-gray-700'>Phone</label>
                                <input type="text" name="phone" placeholder='Enter phone #' className='w-full px-3 py-2 border' {...register('phone', { required: 'Phone number is required' })} />
                                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Shipping Information */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Address</label>
                                <input type="text" name="address" placeholder='Enter Address' className='w-full px-3 py-2 border' {...register('address', { required: 'Address is required' })} />
                                {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                            </div>
                            <div>
                                <label className='block text-gray-700'>City</label>
                                <input type="text" name="city" placeholder='Enter City' className='w-full px-3 py-2 border' {...register('city', { required: 'City is required' })} />
                                {errors.city && <p className='text-red-500'>{errors.city.message}</p>}
                            </div>
                            <div>
                                <label className='block text-gray-700'>Zipcode</label>
                                <input type="number" name="zip" placeholder='Enter ZipCode' className='w-full px-3 py-2 border' {...register('zip', { required: 'Zipcode is required' })} />
                                {errors.zip && <p className='text-red-500'>{errors.zip.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input type="radio" value="cod" {...register('paymentMethod')} checked={watchPaymentMethod === "cod"} />
                                <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type="radio" value="dc" {...register('paymentMethod')} checked={watchPaymentMethod === "dc"} />
                                <label className='block text-gray-700 ml-2'>Debit Card</label>
                            </div>
                            {watchPaymentMethod === "dc" && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card</h3>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                        <input className='border p-2 w-full rounded' type="text" placeholder='Enter Card Number' {...register('cardNumber', { required: 'Card number is required' })} />
                                        {errors.cardNumber && <p className='text-red-500'>{errors.cardNumber.message}</p>}
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                                        <input type="text" placeholder='Enter Card holder name' className='border p-2 w-full rounded' {...register('cardHolderName', { required: 'Card holder name is required' })} />
                                        {errors.cardHolderName && <p className='text-red-500'>{errors.cardHolderName.message}</p>}
                                    </div>
                                    <div className='flex justify-between mb-4'>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                                            <input type="text" placeholder='MM/YY' className='border p-2 w-full rounded' {...register('expireDate', { required: 'Expire date is required' })} />
                                            {errors.expireDate && <p className='text-red-500'>{errors.expireDate.message}</p>}
                                        </div>
                                        <div className='w-1/2 ml-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                            <input type="text" placeholder='CVV' className='border p-2 w-full rounded' {...register('cvv', { required: 'CVV is required' })} />
                                            {errors.cvv && <p className='text-red-500'>{errors.cvv.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cart.items.map(item => (
                            <div key={item._id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={item.picture.secure_url} alt={item.name} className='w-16 h-16 object-contain rounded' />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{item.name}</h4>
                                        <p className='text-gray-600'>
                                            ${item.price} x {item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>
                                    ${item.price * item.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t py-4'>
                        <div className='flex justify-between'>
                            <span>Total Price:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Conditionally render the "Place Order" button */}
                    {cart.items.length > 0 && (
                        <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800' type='submit' disabled={!isValid}>
                            Place Order
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Checkout
