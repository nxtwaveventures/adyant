"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function BookmarksCataloguePage() {
    const [selectedColor, setSelectedColor] = useState('all');

    const bookmarks = [
        {
            id: 'bookmark-1',
            name: "Colorful Watch Design Bookmark",
            description: "Premium quality bookmark featuring Adyant's vibrant watch design",
            price: 99,
            colors: ["Blue", "Red", "Green"],
            sizes: ["Standard"],
            image: "/images/t-shirts/WhatsApp Image 2025-04-17 at 3.30.14 PM.jpeg", // Replace with bookmark image
            popular: true,
            category: "watch-design"
        },
        {
            id: 'bookmark-2',
            name: "Artistic Pattern Bookmark",
            description: "Durable bookmark with Adyant's unique pattern art",
            price: 99,
            colors: ["Yellow", "Purple", "Orange"],
            sizes: ["Standard"],
            image: "/images/t-shirts/WhatsApp Image 2025-04-17 at 3.25.28 PM.jpeg", // Replace with bookmark image
            popular: false,
            category: "pattern"
        },
        {
            id: 'bookmark-3',
            name: "Ocean Friends Bookmark",
            description: "Beautiful bookmark with marine designs by Adyant",
            price: 129,
            colors: ["Blue", "Teal"],
            sizes: ["Standard", "Large"],
            image: "/images/t-shirts/WhatsApp Image 2025-04-17 at 3.02.27 PM.jpeg", // Replace with bookmark image
            popular: true,
            category: "ocean-theme"
        },
    ];

    const filterByColor = (bookmark) => {
        if (selectedColor === 'all') return true;
        return bookmark.colors.includes(selectedColor);
    };

    const colorOptions = ['all', 'Blue', 'Red', 'Green', 'Yellow', 'Purple', 'Orange', 'Teal'];

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
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Adyant's Bookmark Collection</h1>
                    <div className="h-1 w-16 bg-blue-600 mb-6"></div>
                    <p className="text-lg text-gray-700 mb-6">
                        Discover unique bookmarks featuring Adyant's original hand-drawn designs.
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

                {/* Bookmark Gallery */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {bookmarks.filter(filterByColor).map(bookmark => (
                            <div key={bookmark.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                                    <Image
                                        src={bookmark.image}
                                        alt={`${bookmark.name} - Designed by Adyant - Premium quality bookmark with unique artwork`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        unoptimized
                                    />
                                    {bookmark.popular && (
                                        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-md">
                                            Popular
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{bookmark.name}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{bookmark.description}</p>

                                    <div className="flex justify-between items-center mb-3">
                                        <div className="text-gray-900 font-bold">₹{bookmark.price}</div>
                                        <div className="text-xs text-green-600">Free shipping</div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="text-sm font-medium text-gray-700 mb-1">Available Colors:</div>
                                        <div className="flex gap-1">
                                            {bookmark.colors.map(color => (
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
                                            {bookmark.sizes.map(size => (
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
                                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Premium Quality</h3>
                            <p className="text-gray-600 text-sm">Durable bookmarks that last through countless reading sessions</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="h-12 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-500">
                                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Unique Designs</h3>
                            <p className="text-gray-600 text-sm">Each design is hand-drawn by Adyant, making every bookmark special</p>
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
