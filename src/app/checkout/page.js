"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { useCart } from '../../components/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
    const router = useRouter();
    const { cart, totalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
    });
    const [errors, setErrors] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('razorpay');
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        // Load Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Redirect to home if cart is empty
        if (cart.length === 0 && !orderPlaced) {
            router.push('/');
        }
    }, [cart, router, orderPlaced]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number should be 10 digits';
        }
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.pincode) {
            newErrors.pincode = 'PIN code is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'PIN code should be 6 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCheckout = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsProcessing(true);

        // In a real implementation, you would call your API here to create an order
        // For demonstration, we'll simulate a successful order creation
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Create a unique order ID
            const generatedOrderId = 'ORDER_' + Math.random().toString(36).substring(2, 15);
            setOrderId(generatedOrderId);

            if (paymentMethod === 'razorpay') {
                // Open Razorpay checkout
                const options = {
                    key: 'rzp_test_YOUR_KEY_HERE', // Replace with your actual test key
                    amount: totalPrice * 100, // amount in paisa
                    currency: 'INR',
                    name: "Adyant's Fun World",
                    description: 'T-shirt purchase',
                    order_id: generatedOrderId,
                    handler: function (response) {
                        handlePaymentSuccess(response);
                    },
                    prefill: {
                        name: formData.name,
                        email: formData.email,
                        contact: formData.phone
                    },
                    notes: {
                        address: formData.address
                    },
                    theme: {
                        color: '#3B82F6'
                    }
                };

                const razorpayInstance = new window.Razorpay(options);
                razorpayInstance.open();
            } else if (paymentMethod === 'cod') {
                // Handle Cash on Delivery
                handlePaymentSuccess({ payment_id: 'COD_' + generatedOrderId });
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            setIsProcessing(false);
        }
    };

    const handlePaymentSuccess = (response) => {
        // In a real app, you would verify the payment with your backend here
        setOrderPlaced(true);
        clearCart();
        setIsProcessing(false);
    };

    // Format price as Indian Rupees
    const formatPrice = (price) => {
        return `₹${price.toLocaleString('en-IN')}`;
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
                            <p className="text-gray-600 mb-6">Thank you for your purchase. Your order #{orderId} has been placed successfully.</p>
                            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
                                <form onSubmit={handleCheckout}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="address" className="block text-gray-700 mb-1">Address</label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            rows="3"
                                            className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                        ></textarea>
                                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="city" className="block text-gray-700 mb-1">City</label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="state" className="block text-gray-700 mb-1">State</label>
                                            <input
                                                type="text"
                                                id="state"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className={`w-full p-2 border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="pincode" className="block text-gray-700 mb-1">PIN Code</label>
                                            <input
                                                type="text"
                                                id="pincode"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleInputChange}
                                                className={`w-full p-2 border rounded-md ${errors.pincode ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <input
                                                type="radio"
                                                id="razorpay"
                                                name="paymentMethod"
                                                value="razorpay"
                                                checked={paymentMethod === 'razorpay'}
                                                onChange={() => setPaymentMethod('razorpay')}
                                                className="mr-2"
                                            />
                                            <label htmlFor="razorpay" className="flex items-center">
                                                <span className="mr-2">Pay with Razorpay</span>
                                                <img src="/images/razorpay-logo.png" alt="Razorpay" className="h-6" />
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="cod"
                                                name="paymentMethod"
                                                value="cod"
                                                checked={paymentMethod === 'cod'}
                                                onChange={() => setPaymentMethod('cod')}
                                                className="mr-2"
                                            />
                                            <label htmlFor="cod">Cash on Delivery</label>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4 mt-6">
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                            disabled={isProcessing}
                                        >
                                            {isProcessing ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                `Place Order • ${formatPrice(totalPrice)}`
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                                <div className="space-y-4 mb-6">
                                    {cart.map((item, index) => (
                                        <div key={index} className="flex justify-between pb-4 border-b">
                                            <div className="flex">
                                                <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden relative mr-3">
                                                    {item.image && (
                                                        <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm">{item.name}</p>
                                                    <p className="text-gray-500 text-xs">
                                                        {item.size && <span>Size: {item.size}</span>}
                                                        {item.color && <span> • Color: {item.color}</span>}
                                                        <span> • Qty: {item.quantity}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span>{formatPrice(totalPrice)}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                        <span>Total</span>
                                        <span>{formatPrice(totalPrice)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 