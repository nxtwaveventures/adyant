'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TshirtDetail = ({ params }) => {
    const router = useRouter();
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    // This would typically come from an API or database
    const tshirts = {
        1: {
            name: "Ocean Guardian",
            description: "100% organic cotton t-shirt featuring Adyant's ocean cleanup design. Each purchase helps remove plastic from our oceans and supports marine life conservation efforts.",
            price: 24.99,
            image: "/images/tshirts/ocean-guardian.jpg",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Ocean Blue", "Coral Pink", "Sea Green"],
            features: [
                "100% organic cotton",
                "Naturally dyed fabric",
                "Original artwork by Adyant",
                "Supports ocean cleanup",
                "Pre-shrunk material",
                "Machine washable"
            ]
        },
        2: {
            name: "Marine Friends",
            description: "Naturally dyed t-shirt with playful sea creatures design. A portion of each sale goes towards marine education programs for children.",
            price: 24.99,
            image: "/images/tshirts/marine-friends.jpg",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Wave Blue", "Sand Beige", "Sunset Orange"],
            features: [
                "100% organic cotton",
                "Naturally dyed fabric",
                "Original artwork by Adyant",
                "Supports marine education",
                "Pre-shrunk material",
                "Machine washable"
            ]
        },
        3: {
            name: "Save Our Seas",
            description: "Eco-friendly t-shirt with ocean conservation message. Wear your commitment to ocean protection with this unique design.",
            price: 24.99,
            image: "/images/tshirts/save-seas.jpg",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Deep Blue", "Aqua", "Pearl White"],
            features: [
                "100% organic cotton",
                "Naturally dyed fabric",
                "Original artwork by Adyant",
                "Supports conservation",
                "Pre-shrunk material",
                "Machine washable"
            ]
        }
    };

    const tshirt = tshirts[params.id];

    if (!tshirt) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">T-shirt not found</h1>
                    <button
                        onClick={() => router.push('/tshirt')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to T-shirts
                    </button>
                </div>
            </div>
        );
    }

    const handleBuy = () => {
        if (!selectedColor) {
            alert('Please select a color');
            return;
        }

        // Here you would typically integrate with a payment processor
        alert(`Thank you for your purchase!\n\nOrder Details:\n${tshirt.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nTotal: $${(tshirt.price * quantity).toFixed(2)}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Image Section */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={tshirt.image}
                                alt={tshirt.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Product Details Section */}
                        <div>
                            <h1 className="text-4xl font-bold text-blue-900 mb-4">{tshirt.name}</h1>
                            <p className="text-2xl font-bold text-blue-900 mb-6">${tshirt.price}</p>
                            <p className="text-gray-600 mb-6">{tshirt.description}</p>

                            {/* Color Selection */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-2">Select Color:</h3>
                                <div className="flex gap-2">
                                    {tshirt.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 rounded-lg border-2 transition-all
                                                ${selectedColor === color
                                                    ? 'border-blue-600 bg-blue-50'
                                                    : 'border-gray-200 hover:border-blue-400'}`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-2">Select Size:</h3>
                                <div className="flex gap-2">
                                    {tshirt.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all
                                                ${selectedSize === size
                                                    ? 'border-blue-600 bg-blue-50'
                                                    : 'border-gray-200 hover:border-blue-400'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selection */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-2">Quantity:</h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-blue-400"
                                    >
                                        -
                                    </button>
                                    <span className="w-12 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-blue-400"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Buy Button */}
                            <button
                                onClick={handleBuy}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-6"
                            >
                                Buy Now - ${(tshirt.price * quantity).toFixed(2)}
                            </button>

                            {/* Features */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-700 mb-4">Features:</h3>
                                <ul className="grid grid-cols-2 gap-2">
                                    {tshirt.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-600">
                                            <span className="mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TshirtDetail; 