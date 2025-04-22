"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function DiaryCoversCataloguePage() {
    const [selectedColor, setSelectedColor] = useState('all');

    const diaryCovers = [
        {
            id: 'diary-cover-1',
            name: "Colorful Watch Design Diary Cover",
            description: "Premium quality diary cover featuring Adyant's vibrant watch design",
            price: 349,
            colors: ["Blue", "Purple", "Green"],
            sizes: ["A5", "A4"],
            image: "/images/t-shirts/WhatsApp Image 2025-04-17 at 3.30.14 PM.jpeg", // Replace with diary cover image
            popular: true,
            category: "watch-design"
        },
        {
            id: 'diary-cover-2',
            name: "Artistic Pattern Diary Cover",
            description: "Premium diary cover with Adyant's unique pattern art",
            price: 349,
            colors: ["Blue", "Red", "Yellow"],
            sizes: ["A5", "A4"],
            image: "/images/t-shirts/WhatsApp Image 2025-04-17 at 3.25.28 PM.jpeg", // Replace with diary cover image
            popular: false,
            category: "pattern"
        },
        {
            id: 'diary-cover-3',
            name: "Ocean Friends Diary Cover",
            description: "Beautiful diary cover with marine designs by Adyant",
            price: 399,
            colors: ["Blue", "Teal"],
            sizes: ["A5", "A4"],
            image: "/images/t-shirts/WhatsApp Image 2025-04-17 at 3.02.27 PM.jpeg", // Replace with diary cover image
            popular: true,
            category: "ocean-theme"
        },
    ];

    const filterByColor = (cover) => {
        if (selectedColor === 'all') return true;
        return cover.colors.includes(selectedColor);
    };

    const colorOptions = ['all', 'Blue', 'Purple', 'Green', 'Red', 'Yellow', 'Teal'];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Hero Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-4">
                        <Link href="/art" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center mr-4">
                            <span>← Back to Art</span>
                        </Link>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Adyant's Diary Cover Collection</h1>
                    <div className="h-1 w-16 bg-blue-600 mb-6"></div>
                    <p className="text-lg text-gray-700 mb-6">
                        Discover unique diary covers featuring Adyant's original hand-drawn designs.
                        Each purchase contributes to ocean cleanup initiatives.
                    </p>

                    {/* Color Filter */}
                    <div className="mb-8">
                        <h2 className="text-lg font-medium text-gray-900 mb-3">Filter by Color</h2>
                        <div className="flex flex-wrap gap-2">
                            {colorOptions.map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`px-3 py-1 rounded-md text-sm capitalize transition-colors ${selectedColor === color
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Diary Cover Gallery */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {diaryCovers.filter(filterByColor).map(cover => (
                            <div key={cover.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                                    <Image
                                        src={cover.image}
                                        alt={`${cover.name} - Designed by Adyant - Premium quality diary cover with unique artwork`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        unoptimized
                                    />
                                    {cover.popular && (
                                        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-md">
                                            Popular
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{cover.name}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{cover.description}</p>

                                    <div className="flex justify-between items-center mb-3">
                                        <div className="text-gray-900 font-bold">₹{cover.price}</div>
                                        <div className="text-xs text-green-600">Free shipping</div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="text-sm font-medium text-gray-700 mb-1">Available Colors:</div>
                                        <div className="flex gap-1">
                                            {cover.colors.map(color => (
                                                <div
                                                    key={color}
                                                    className="w-6 h-6 rounded-full border border-gray-300"
                                                    style={{ backgroundColor: color.toLowerCase() }}
                                                    title={color}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-sm font-medium text-gray-700 mb-1">Sizes:</div>
                                        <div className="flex gap-1">
                                            {cover.sizes.map(size => (
                                                <div
                                                    key={size}
                                                    className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-md"
                                                >
                                                    {size}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-md">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Environmental Impact */}
                <section className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Purchase Makes a Difference</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="h-12 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-500">
                                    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.09.859 4.004 2.273 5.48a6.72 6.72 0 00-1.952 2.544c-.24.556-.22 1.18.051 1.72.27.532.758.905 1.33 1.02.57.113 1.157.028 1.627-.26.446-.273.84-.627 1.185-1.042zM12 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    <path d="M14.084 2.679l-3 7a1 1 0 001.32 1.314l7-3a1 1 0 00-.108-1.85l-7-3a1 1 0 00-1.212.536z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Ocean Cleanup</h3>
                            <p className="text-gray-600 text-sm">50% of profits go directly to removing plastic from our oceans</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="h-12 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-purple-500">
                                    <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm4 2a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1H9z" />
                                    <path d="M15 6a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Premium Quality</h3>
                            <p className="text-gray-600 text-sm">High-quality diary covers that are durable and stylish</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="h-12 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-500">
                                    <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32L11.5 7.25l-1.979-2.15L9.5 5l-.026.026A1 1 0 008 5.026v13.5c0 .138.112.25.25.25h1.5A.25.25 0 0010 18.5v-.714l1.933-.512a31.61 31.61 0 016.533-.673h.5v-9.5h-.097a1 1 0 00-.366-.71l-.232-.213A1 1 0 0017.5 6.5l-2-2a1 1 0 00-.707-.293l-.768-.768a1 1 0 00-.707-.293L13 3a1 1 0 00-.707.293L11.5 4.086l-1.5-1.5A1 1 0 008.981 2H5.5a1 1 0 00-1 1V14a1 1 0 001 1h2.25v3.25c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25V15h1.5c.138 0 .25-.112.25-.25v-2.5h2.25c.138 0 .25-.112.25-.25v-2.5h2.25a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75h-.5a.75.75 0 00-.75.75v2.25h-1.5v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v1.5h-1.5v-2.5a.75.75 0 00-.75-.75H5.5v-1h3.5l1.5 1.5-1.5 1.5h-1.5v-1h-1v1h-.5a.75.75 0 00-.75.75v2.5h-1.5v-2.5a.75.75 0 00-.75-.75H2v-1h1.5a.75.75 0 00.75-.75v-1h1v1h.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H4v-1.5h1v1h1.5v-1h1a.75.75 0 00.75-.75V2.5a.75.75 0 00-.75-.75H5.5v-.25c0-.414.336-.75.75-.75h2.563c.37 0 .725.147.987.409L11.5 3.107l.657-.657a.75.75 0 01.53-.22h2.813a.75.75 0 01.53.22l.647.647a.75.75 0 01.22.53v2.313c0 .2-.077.388-.218.53l-3.769 3.769a.75.75 0 01-.53.218H9.5a.75.75 0 01-.53-.218l-3.75-3.75A.75.75 0 015 6.25V3.5h-.75a.75.75 0 01-.75-.75V1.5h-.725z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Unique Designs</h3>
                            <p className="text-gray-600 text-sm">Each design is hand-drawn by Adyant, making every diary cover special</p>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="bg-gray-100 py-6">
                <div className="container mx-auto text-center text-gray-600">
                    <p>© 2025 Adyant's Creative World</p>
                </div>
            </footer>
        </div>
    );
} 