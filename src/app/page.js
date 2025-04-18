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
                <section className="bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 py-12 md:py-20 rounded-xl mb-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    Welcome to Adyant's Fun World
                                </h1>
                                <p className="text-white text-lg mb-6">
                                    Kid-designed t-shirts that help save our oceans
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/art"
                                        className="bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                        Explore T-shirts
                                    </Link>
                                    <Link
                                        href="/mission"
                                        className="inline-block px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors border-2 border-white"
                                    >
                                        Join Our Mission
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1 md:flex justify-center hidden">
                                <div className="w-80 h-80 rounded-xl overflow-hidden border-4 border-white shadow-xl">
                                    <Image
                                        src="/images/t-shirts/WhatsApp Image 2025-04-17 at 3.30.14 PM.jpeg"
                                        alt="Adyant's Colorful Art"
                                        width={320}
                                        height={320}
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Available On Section */}
                <div className="bg-white py-6 mb-8">
                    <div className="container mx-auto px-4">
                        <h3 className="text-lg text-center text-gray-500 mb-4">ALSO AVAILABLE ON</h3>
                        <div className="flex justify-center items-center gap-8">
                            <a href="#" className="grayscale hover:grayscale-0 transition-all">
                                <img
                                    src="/images/amazon-logo.png"
                                    alt="Amazon"
                                    className="h-8 object-contain"
                                />
                            </a>
                            <a href="#" className="grayscale hover:grayscale-0 transition-all">
                                <img
                                    src="/images/myntra-logo.png"
                                    alt="Myntra"
                                    className="h-8 object-contain"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Kid Creator Story */}
                <div className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center">
                            <div className="w-full max-w-xl text-center">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Adyant: 6-Year-Old Ocean Protector</h2>
                                <p className="mb-4">
                                    Hi! I'm Adyant! I love football, Minecraft (don't tell Mom 🤫), and saving oceans!
                                    Buy my cool t-shirts to help clean up plastic and play my awesome game!
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/mission"
                                        className="inline-block px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors text-lg"
                                    >
                                        Play Ocean Game
                                    </Link>
                                </div>
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
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Featured T-Shirts</h2>
                    <p className="text-gray-700 mb-8">
                        Discover Adyant's unique t-shirt designs and support our ocean cleanup mission.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/images/t-shirts/WhatsApp Image 2025-04-17 at 3.25.28 PM.jpeg"
                                    alt="Standard T-Shirts"
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
                            <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/images/t-shirts/WhatsApp Image 2025-04-17 at 3.30.14 PM.jpeg"
                                    alt="Subscription T-Shirts"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-lg font-bold text-blue-700">T-Shirt Subscription</h3>
                            <p className="text-sm text-gray-600 mb-4">Get new designs delivered regularly</p>
                            <Link href="/art/t-shirt-subscription" className="text-blue-600 font-medium hover:text-blue-800">
                                Subscribe Now →
                            </Link>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/images/t-shirts/WhatsApp Image 2025-04-17 at 3.02.27 PM.jpeg"
                                    alt="Ocean Theme T-Shirts"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-lg font-bold text-blue-700">Ocean Theme Collection</h3>
                            <p className="text-sm text-gray-600 mb-4">T-shirts with ocean-inspired designs</p>
                            <Link href="/art/t-shirt-catalogue" className="text-blue-600 font-medium hover:text-blue-800">
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