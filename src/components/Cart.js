"use client";

import { useState } from 'react';
import { useCart } from './CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Cart() {
    const {
        cart,
        cartOpen,
        setCartOpen,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice
    } = useCart();

    // Format price as Indian Rupees
    const formatPrice = (price) => {
        return `₹${price.toLocaleString('en-IN')}`;
    };

    return (
        <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
                {/* Cart Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">Your Cart ({cart.length})</h2>
                    <button
                        onClick={() => setCartOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Cart Content */}
                <div className="flex-grow overflow-y-auto p-4">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <p className="text-gray-500 text-center">Your cart is empty</p>
                            <Link
                                href="/art/t-shirt-catalogue"
                                onClick={() => setCartOpen(false)}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item, index) => (
                                <div key={index} className="flex border-b pb-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden relative">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                layout="fill"
                                                objectFit="cover"
                                                unoptimized
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                <span className="text-gray-400">No image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="ml-4 flex-grow">
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm text-gray-500">
                                            {item.color && <span>Color: {item.color}</span>}
                                            {item.size && <span> | Size: {item.size}</span>}
                                        </p>
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center border rounded-md">
                                                <button
                                                    onClick={() => updateQuantity(index, item.quantity - 1)}
                                                    className="px-2 py-1 text-gray-500 hover:text-gray-700"
                                                >
                                                    -
                                                </button>
                                                <span className="px-2">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(index, item.quantity + 1)}
                                                    className="px-2 py-1 text-gray-500 hover:text-gray-700"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(index)}
                                        className="ml-2 text-gray-400 hover:text-red-500"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Cart Footer */}
                {cart.length > 0 && (
                    <div className="p-4 border-t">
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>{formatPrice(totalPrice)}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mb-4">
                            <span>Total</span>
                            <span>{formatPrice(totalPrice)}</span>
                        </div>
                        <Link
                            href="/checkout"
                            className="block w-full py-3 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700"
                        >
                            Proceed to Checkout
                        </Link>
                        <button
                            onClick={clearCart}
                            className="block w-full mt-2 py-2 text-gray-500 text-sm text-center hover:text-gray-700"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
} 