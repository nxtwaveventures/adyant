"use client";

import React from 'react';
import Link from 'next/link';

const TshirtPage = () => {
    const tshirts = [
        {
            id: 1,
            name: "Ocean Guardian",
            description: "100% organic cotton t-shirt featuring Adyant's ocean cleanup design",
            price: 24.99,
            image: "/images/tshirts/ocean-guardian.jpg",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Ocean Blue", "Coral Pink", "Sea Green"]
        },
        {
            id: 2,
            name: "Marine Friends",
            description: "Naturally dyed t-shirt with playful sea creatures design",
            price: 24.99,
            image: "/images/tshirts/marine-friends.jpg",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Wave Blue", "Sand Beige", "Sunset Orange"]
        },
        {
            id: 3,
            name: "Save Our Seas",
            description: "Eco-friendly t-shirt with ocean conservation message",
            price: 24.99,
            image: "/images/tshirts/save-seas.jpg",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Deep Blue", "Aqua", "Pearl White"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Ocean-Inspired T-Shirts
                </h1>
                <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Wear your love for the ocean! Each t-shirt is made from 100% organic cotton,
                    naturally dyed, and features unique designs by Adyant and his team.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tshirts.map((tshirt) => (
                        <div key={tshirt.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    src={tshirt.image}
                                    alt={tshirt.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{tshirt.name}</h3>
                                <p className="text-gray-600 mb-4">{tshirt.description}</p>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-700 mb-2">Available Colors:</h4>
                                    <div className="flex gap-2">
                                        {tshirt.colors.map((color) => (
                                            <span key={color} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                                {color}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-700 mb-2">Sizes:</h4>
                                    <div className="flex gap-2">
                                        {tshirt.sizes.map((size) => (
                                            <span key={size} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                                {size}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-bold text-blue-900">${tshirt.price}</span>
                                    <button
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        onClick={() => window.location.href = `/tshirt/${tshirt.id}`}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Our T-Shirts?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-bold text-blue-800 mb-2">100% Organic</h3>
                                <p className="text-gray-600">Made from premium organic cotton for ultimate comfort</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800 mb-2">Natural Dyes</h3>
                                <p className="text-gray-600">Colored using eco-friendly natural dyes</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800 mb-2">Ocean Impact</h3>
                                <p className="text-gray-600">Part of proceeds go to ocean cleanup initiatives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TshirtPage; 