"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { useCart } from '../../../components/CartContext';

export default function TShirtCataloguePage() {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState({});
    const [selectedColor, setSelectedColor] = useState({});
    const [sizeError, setSizeError] = useState({});
    const [colorError, setColorError] = useState({});
    const [addedToCart, setAddedToCart] = useState({});

    const tshirts = [
        {
            id: 't1',
            name: 'Ocean Friends',
            description: 'Colorful sea creatures design by Adyant',
            price: 599,
            image: '/images/t-shirts/WhatsApp Image 2025-04-17 at 3.30.14 PM.jpeg',
            colors: ['#3B82F6', '#14B8A6', '#FFFFFF'],
            colorNames: ['Blue', 'Teal', 'White'],
            sizes: ['S', 'M', 'L', 'XL']
        },
        {
            id: 't2',
            name: 'Stick Figure Adventure',
            description: 'Fun stick figure design by Adyant',
            price: 549,
            image: '/images/t-shirts/WhatsApp Image 2025-04-17 at 3.25.28 PM.jpeg',
            colors: ['#FFFFFF', '#000000', '#EF4444'],
            colorNames: ['White', 'Black', 'Red'],
            sizes: ['S', 'M', 'L', 'XL']
        },
        {
            id: 't3',
            name: 'Sea Turtle Journey',
            description: 'Help save turtles with this cute design',
            price: 649,
            image: '/images/t-shirts/WhatsApp Image 2025-04-17 at 3.02.27 PM.jpeg',
            colors: ['#22C55E', '#3B82F6', '#FFFFFF'],
            colorNames: ['Green', 'Blue', 'White'],
            sizes: ['S', 'M', 'L', 'XL']
        }
    ];

    const handleSizeSelect = (tshirtId, size) => {
        setSelectedSize({ ...selectedSize, [tshirtId]: size });
        setSizeError({ ...sizeError, [tshirtId]: false });
    };

    const handleColorSelect = (tshirtId, colorIndex) => {
        setSelectedColor({ ...selectedColor, [tshirtId]: colorIndex });
        setColorError({ ...colorError, [tshirtId]: false });
    };

    const handleAddToCart = (tshirt) => {
        // Validate selection
        if (!selectedSize[tshirt.id]) {
            setSizeError({ ...sizeError, [tshirt.id]: true });
            return;
        }
        if (selectedColor[tshirt.id] === undefined) {
            setColorError({ ...colorError, [tshirt.id]: true });
            return;
        }

        // Add to cart
        addToCart({
            id: tshirt.id,
            name: tshirt.name,
            price: tshirt.price,
            image: tshirt.image,
            size: selectedSize[tshirt.id],
            color: tshirt.colorNames[selectedColor[tshirt.id]],
            quantity: 1
        });

        // Show added to cart message
        setAddedToCart({ ...addedToCart, [tshirt.id]: true });
        setTimeout(() => {
            setAddedToCart({ ...addedToCart, [tshirt.id]: false });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <header className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Adyant's T-Shirt Collection</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        All t-shirts feature original designs by Adyant. Each purchase helps remove plastic from our oceans.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tshirts.map((tshirt) => (
                        <div key={tshirt.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-neutral-50 aspect-square flex items-center justify-center">
                                <div className="w-full h-full p-6 flex items-center justify-center">
                                    <Image
                                        src={tshirt.image}
                                        alt={tshirt.name}
                                        width={260}
                                        height={260}
                                        priority
                                        style={{
                                            objectFit: "contain",
                                            objectPosition: "center",
                                            maxHeight: "260px"
                                        }}
                                        className="rounded-md"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">{tshirt.name}</h2>
                                <p className="text-gray-600 mb-4">{tshirt.description}</p>
                                <p className="text-2xl font-bold text-blue-600 mb-4">₹{tshirt.price}</p>

                                {/* Sizes */}
                                <div className="mb-4">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Size</h3>
                                    <div className="flex space-x-2">
                                        {tshirt.sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => handleSizeSelect(tshirt.id, size)}
                                                className={`py-2 px-4 rounded-md text-sm ${selectedSize[tshirt.id] === size
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    {sizeError[tshirt.id] && (
                                        <p className="text-red-500 text-sm mt-1">Please select a size</p>
                                    )}
                                </div>

                                {/* Colors */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
                                    <div className="flex space-x-2">
                                        {tshirt.colors.map((color, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleColorSelect(tshirt.id, index)}
                                                className={`w-8 h-8 rounded-full border-2 ${selectedColor[tshirt.id] === index
                                                    ? 'border-blue-600'
                                                    : 'border-transparent'
                                                    }`}
                                                style={{ backgroundColor: color }}
                                                aria-label={`Color ${tshirt.colorNames[index]}`}
                                                title={tshirt.colorNames[index]}
                                            ></button>
                                        ))}
                                    </div>
                                    {colorError[tshirt.id] && (
                                        <p className="text-red-500 text-sm mt-1">Please select a color</p>
                                    )}
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={() => handleAddToCart(tshirt)}
                                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${addedToCart[tshirt.id]
                                        ? 'bg-green-600 text-white'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    {addedToCart[tshirt.id] ? 'Added to Cart!' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Environmental Impact */}
                <section className="mt-16 bg-blue-50 p-8 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4 text-center">Every Purchase Makes an Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-3xl">🌊</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Ocean Cleanup</h3>
                            <p className="text-gray-600">50% of profits fund removing plastic waste from oceans.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-3xl">👕</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">100% Cotton</h3>
                            <p className="text-gray-600">Our shirts are made from premium soft cotton for comfort.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-3xl">✏️</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Kid-Designed</h3>
                            <p className="text-gray-600">Every design is created by Adyant, a young artist with a mission.</p>
                        </div>
                    </div>
                </section>

                {/* Subscription Section */}
                <section className="mt-16 mb-12 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:w-2/3">
                            <h2 className="text-2xl font-bold mb-2">Subscribe and Save!</h2>
                            <p className="text-lg opacity-90">Get new shirts delivered every month and save up to 20%.</p>
                        </div>
                        <Link href="/art/t-shirt-subscription"
                            className="bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                            Subscribe Now →
                        </Link>
                    </div>
                </section>

                {/* Customer Reviews Section */}
                <section className="mt-16 bg-gray-50 p-8 rounded-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"My son loves his ocean t-shirt! The design is so cute and knowing we're helping clean the oceans makes it even better."</p>
                            <p className="font-bold">- Priya M.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"The ocean cleanup game is so engaging! My kids play it for hours while learning about environmental issues. The t-shirts are great quality too!"</p>
                            <p className="font-bold">- Rahul K.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"I bought this for my nephew and he won't take it off! I love supporting a cause that helps our planet while getting such a unique design made by a child."</p>
                            <p className="font-bold">- Anika S.</p>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600">© 2025 Adyant's Fun World. All rights reserved.</p>
                    <p className="text-gray-500 mt-2">Kid-designed t-shirts that help save our oceans.</p>
                </div>
            </footer>
        </div>
    );
} 