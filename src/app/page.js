"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-xl mb-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Welcome to Adyant's Fun World</h1>
                            <p className="text-lg mb-6 text-white">
                                Discover creative art, stories, and products designed by Adyant, a talented young artist with a mission to save our oceans.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/art"
                                    className="bg-white text-blue-700 py-3 px-6 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                    Explore Art Gallery
                                </Link>
                                <Link href="/mission"
                                    className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                                    Our Ocean Mission
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 md:flex justify-center hidden">
                            <div className="w-80 h-80 rounded-xl overflow-hidden border-4 border-white shadow-xl">
                                <Image
                                    src="/images/adyant-watches-drawing.jpg"
                                    alt="Adyant's Colorful Art"
                                    width={320}
                                    height={320}
                                    className="object-cover w-full h-full"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Shop & Support</h2>
                        <div className="text-6xl mb-4 text-center">🛍️</div>
                        <p className="text-gray-700 mb-6">
                            Browse our collection of t-shirts and products featuring Adyant's creative designs.
                        </p>
                        <div className="text-center">
                            <Link href="/art/t-shirt-catalogue" className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Ocean Cleanup</h2>
                        <div className="text-6xl mb-4 text-center">🌊</div>
                        <p className="text-gray-700 mb-6">
                            Play our game, make a donation, and help us clean the oceans. 50% of proceeds go to conservation.
                        </p>
                        <div className="text-center">
                            <Link href="/mission" className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Join Mission
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Videos & Stories</h2>
                        <div className="text-6xl mb-4 text-center">📚</div>
                        <p className="text-gray-700 mb-6">
                            Enjoy creative videos and upcoming storytelling adventures by Adyant.
                        </p>
                        <div className="text-center">
                            <Link href="/videos" className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Watch & Read
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Featured Collections */}
                <div className="bg-blue-50 p-6 rounded-xl mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Featured Collections</h2>
                    <p className="text-gray-700 mb-8">
                        Discover Adyant's most popular creations and support our ocean cleanup mission.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/images/t-shirts/WhatsApp Image 2025-04-17 at 3.25.28 PM.jpeg"
                                    alt="T-Shirt Collection"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-lg font-bold text-blue-700">T-Shirt Collection</h3>
                            <p className="text-sm text-gray-600 mb-4">Premium t-shirts with Adyant's designs</p>
                            <Link href="/art/t-shirt-catalogue" className="text-blue-600 font-medium hover:text-blue-800">
                                Shop T-Shirts →
                            </Link>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-square flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                                <span className="text-6xl">⌚</span>
                            </div>
                            <h3 className="text-lg font-bold text-blue-700">Watch Designs</h3>
                            <p className="text-sm text-gray-600 mb-4">Colorful watch designs by Adyant</p>
                            <Link href="/art/watches" className="text-blue-600 font-medium hover:text-blue-800">
                                View Designs →
                            </Link>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/images/t-shirts/WhatsApp Image 2025-04-17 at 3.02.27 PM.jpeg"
                                    alt="Kids Collection"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-lg font-bold text-blue-700">Kids Collection</h3>
                            <p className="text-sm text-gray-600 mb-4">Special items designed for children</p>
                            <Link href="/art/kids-collection" className="text-blue-600 font-medium hover:text-blue-800">
                                Explore Collection →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-auto">
                <div className="container text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Art that makes a difference!</p>
                </div>
            </footer>
        </div>
    );
}