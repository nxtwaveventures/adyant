"use client";

import React, { useState } from 'react';

export default function ProductDetails({ product }) {
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleBuy = () => {
        if (!selectedColor) {
            alert('Please select a color');
            return;
        }

        // Here you would typically integrate with a payment processor
        alert(`Thank you for your purchase!\n\nOrder Details:\n${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nTotal: $${(product.price * quantity).toFixed(2)}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img
                                className="h-96 w-full object-cover md:w-96"
                                src={product.image}
                                alt={product.name}
                            />
                        </div>
                        <div className="p-8">
                            <h1 className="text-3xl font-bold text-blue-900 mb-4">
                                {product.name}
                            </h1>
                            <p className="text-xl text-blue-600 mb-4">
                                ${product.price}
                            </p>
                            <div className="prose max-w-none text-gray-600 mb-6">
                                <p>{product.description}</p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-blue-900 mb-2">
                                        Size Guide
                                    </h2>
                                    <p className="text-gray-600">
                                        Available in kids sizes: XS (4-5), S (6-7), M (8-9), L (10-11)
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-blue-900 mb-2">
                                        Material
                                    </h2>
                                    <p className="text-gray-600">
                                        100% organic cotton, eco-friendly printing
                                    </p>
                                </div>
                                <button
                                    onClick={handleBuy}
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 