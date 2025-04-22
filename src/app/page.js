"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
                        Kids Create, Ocean Breathe
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        A collection of naturally dyed, 100% organic cotton t-shirts featuring Adyant's and his team's creative designs. Each purchase helps clean our oceans.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/mission"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Play & Earn
                        </Link>
                        <Link
                            href="/tshirt"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-600"
                        >
                            Shop T-Shirts
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
                        Why Choose Our T-Shirts?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 rounded-xl p-6 text-center">
                            <div className="text-4xl mb-4">🌊</div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Ocean Impact</h3>
                            <p className="text-gray-600">50% of every purchase helps remove plastic from our oceans</p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-6 text-center">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly</h3>
                            <p className="text-gray-600">Made from 100% organic cotton with natural dyes</p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-6 text-center">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Creative Designs</h3>
                            <p className="text-gray-600">Unique artwork by Adyant & his team</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Join Our Ocean Conservation Mission
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Every t-shirt tells a story and makes a difference. Be part of the change!
                    </p>
                    <Link
                        href="/tshirt"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    >
                        Shop Now
                    </Link>
                </div>
            </section>
        </div>
    );
}