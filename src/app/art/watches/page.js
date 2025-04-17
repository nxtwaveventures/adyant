"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function WatchesArtPage() {
    const [selectedFormat, setSelectedFormat] = useState('digital');
    const [showAddedMessage, setShowAddedMessage] = useState(false);

    const formats = [
        { id: 'digital', name: 'Digital Download', price: 249, description: 'High-resolution image for printing at home or using digitally' },
        { id: 'print', name: 'Premium Print', price: 549, description: 'Professional print on premium paper, shipped to your doorstep' },
        { id: 'tshirt', name: 'T-shirt', price: 699, description: 'Comfortable 100% cotton t-shirt with this design, available in various sizes' },
        { id: 'poster', name: 'Large Poster', price: 799, description: 'High-quality large poster print, perfect for bedroom walls' },
        { id: 'stickers', name: 'Sticker Pack', price: 349, description: 'Set of 5 vinyl stickers featuring each watch design' }
    ];

    const handleAddToCart = () => {
        setShowAddedMessage(true);
        setTimeout(() => {
            setShowAddedMessage(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8">
                <div className="mb-4">
                    <Link href="/art" className="text-sm bg-white bg-opacity-30 py-1 px-3 rounded-lg hover:bg-opacity-40">
                        ← Back to Art Gallery
                    </Link>
                </div>

                <div className="section bg-highlight">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left side - Image */}
                        <div className="md:w-1/2">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <img
                                    src="/images/adyant-watches-drawing.jpg"
                                    alt="Adyant's Colorful Watches Collection"
                                    className="w-full h-auto rounded"
                                />
                            </div>
                            <div className="mt-4 bg-white bg-opacity-20 p-4 rounded-lg">
                                <h3 className="font-bold mb-2">About This Artwork</h3>
                                <p>
                                    This original drawing was created by Adyant featuring his unique colorful watch designs.
                                    Each watch has been carefully drawn and colored with attention to detail,
                                    showcasing Adyant's creativity and artistic talent.
                                </p>
                            </div>
                        </div>

                        {/* Right side - Product details */}
                        <div className="md:w-1/2">
                            <h1 className="text-2xl font-bold mb-2">Colorful Watches Collection</h1>
                            <p className="mb-6">
                                Adyant's vibrant watch designs make a perfect addition to any room or as a special gift.
                                50% of all proceeds go directly to children's education and ocean cleanup efforts.
                            </p>

                            <div className="mb-6">
                                <h3 className="font-bold mb-3">Select Format:</h3>
                                <div className="space-y-3">
                                    {formats.map(format => (
                                        <div
                                            key={format.id}
                                            onClick={() => setSelectedFormat(format.id)}
                                            className={`p-3 rounded-lg cursor-pointer transition-all ${selectedFormat === format.id
                                                ? 'bg-accent'
                                                : 'bg-white bg-opacity-30 hover:bg-opacity-40'
                                                }`}
                                        >
                                            <div className="flex justify-between">
                                                <span className="font-semibold">{format.name}</span>
                                                <span className="font-bold">₹{format.price}</span>
                                            </div>
                                            <p className="text-sm">{format.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="bg-accent text-foreground font-bold py-3 px-6 rounded-lg flex-1 hover:transform hover:scale-105 transition-all"
                                >
                                    Add to Cart
                                </button>
                                <Link
                                    href="/mission"
                                    className="bg-white bg-opacity-30 font-bold py-3 px-6 rounded-lg text-center hover:bg-opacity-40 transition-all"
                                >
                                    Learn About Our Mission
                                </Link>
                            </div>

                            {showAddedMessage && (
                                <div className="mt-4 bg-green-500 bg-opacity-90 text-white p-3 rounded-lg text-center">
                                    Item added to cart successfully!
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white border-opacity-30">
                        <h2 className="text-xl font-bold mb-4">How Your Purchase Helps</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                                <h3 className="font-bold mb-2">Education Support</h3>
                                <p>
                                    25% of your purchase goes directly to providing educational resources for
                                    underprivileged children, helping them access books, school supplies, and quality teaching.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                                <h3 className="font-bold mb-2">Ocean Cleanup</h3>
                                <p>
                                    Another 25% is dedicated to ocean cleanup initiatives, helping remove plastic
                                    waste from our oceans and protecting marine ecosystems.
                                </p>
                            </div>
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