"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import OceanCleanupGame from '../../../components/OceanCleanupGame';

export default function TShirtSubscriptionPage() {
    const [subscriptionPlan, setSubscriptionPlan] = useState('monthly');
    const [size, setSize] = useState('medium');
    const [quantity, setQuantity] = useState(1);
    const [wavePosition, setWavePosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [oceanScore, setOceanScore] = useState(0);
    const [cleanupPercent, setCleanupPercent] = useState(30);
    const [discountCode, setDiscountCode] = useState('');
    const [useDiscount, setUseDiscount] = useState(false);

    const planPrices = {
        monthly: 999,
        quarterly: 2799,
        yearly: 9999
    };

    // Wave animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setWavePosition(prev => (prev + 1) % 100);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Ocean cleanup mini-game
    const startOceanGame = () => {
        setIsPlaying(true);
        setOceanScore(0);
    };

    const collectTrash = () => {
        if (isPlaying) {
            setOceanScore(prev => prev + 1);
            // Increase the cleanup percentage for visual feedback
            const newCleanupPercent = Math.min(100, cleanupPercent + 2);
            setCleanupPercent(newCleanupPercent);

            if (oceanScore >= 9) {
                setIsPlaying(false);
                alert("Great job! You've removed 10 pieces of trash from our virtual ocean. Imagine the impact your t-shirt purchase can make in the real world!");
            }
        }
    };

    const totalPrice = planPrices[subscriptionPlan] * quantity;

    // Handle game completion
    const handleGameComplete = (couponCode) => {
        setDiscountCode(couponCode);
        setUseDiscount(true);
        // Apply 10% discount to total price
        updateTotalPrice();
    };

    // Update total price with discount
    const updateTotalPrice = () => {
        const basePrice = planPrices[subscriptionPlan] * quantity;
        let finalPrice = basePrice;

        if (useDiscount && discountCode) {
            finalPrice = basePrice * 0.9; // 10% discount
        }

        return finalPrice;
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Hero Section - Minimalist */}
                <section className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    <div className="flex-1 space-y-6">
                        <Link href="/art" className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-flex items-center">
                            <span>← Back to Art</span>
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Adyant's T-Shirt Collection</h1>
                        <div className="h-1 w-16 bg-kids-purple"></div>
                        <p className="text-lg text-gray-700">
                            Premium cotton shirts with authentic designs.
                            <span className="block mt-1">Each purchase funds ocean cleanup.</span>
                        </p>
                        <div className="bg-gray-100 inline-block px-3 py-1 rounded-md">
                            <span className="font-medium text-gray-800">From ₹999/month</span>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="relative w-full h-64 bounce-animation">
                                <Image
                                    src="/images/adyant-watches-drawing.jpg"
                                    alt="Adyant's T-shirt Collection"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    className="rounded-lg"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Ocean Cleanup Game */}
                <section className="relative overflow-hidden rounded-xl shadow-sm mb-12 py-10 px-6 text-white bg-gradient-to-r from-blue-600 to-blue-800">
                    <div className="absolute inset-0 z-0">
                        {/* Animated Wave */}
                        <div
                            className="absolute w-[200%] h-16 bottom-0 left-0"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                                transform: `translateX(-${wavePosition}%)`,
                                opacity: 0.7
                            }}
                        />
                        <div
                            className="absolute w-[200%] h-12 bottom-12 left-0"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                transform: `translateX(-${(wavePosition + 30) % 100}%)`,
                                opacity: 0.5
                            }}
                        />
                    </div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Clean The Ocean</h2>
                        <p className="text-lg mb-6">Every t-shirt helps remove ocean plastic</p>

                        {!isPlaying ? (
                            <button
                                onClick={startOceanGame}
                                className="bg-white text-blue-700 font-bold py-3 px-6 rounded-md hover:bg-blue-50 transition-colors cursor-pointer mb-6"
                            >
                                Play Mini-Game
                            </button>
                        ) : (
                            <div className="mb-6">
                                <p className="mb-2 font-bold">Click to remove trash: {oceanScore}/10</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    {[...Array(10 - oceanScore)].map((_, i) => (
                                        <div
                                            key={i}
                                            onClick={collectTrash}
                                            className="text-4xl cursor-pointer transform hover:scale-110 transition-transform"
                                            style={{
                                                animation: `floating ${5 + i * 0.5}s ease-in-out infinite`,
                                                position: 'relative'
                                            }}
                                        >
                                            {['🍾', '🛍️', '🥤', '🧴', '⚓'][i % 5]}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white bg-opacity-20 p-3 rounded-md">
                                <div className="text-2xl md:text-3xl mb-1">🌊</div>
                                <h3 className="font-bold text-lg">120kg</h3>
                                <p className="text-xs md:text-sm">Plastic removed</p>
                            </div>
                            <div className="bg-white bg-opacity-20 p-3 rounded-md">
                                <div className="text-2xl md:text-3xl mb-1">🐠</div>
                                <h3 className="font-bold text-lg">3</h3>
                                <p className="text-xs md:text-sm">Cleanup events</p>
                            </div>
                            <div className="bg-white bg-opacity-20 p-3 rounded-md">
                                <div className="text-2xl md:text-3xl mb-1">🌱</div>
                                <h3 className="font-bold text-lg">1,500</h3>
                                <p className="text-xs md:text-sm">Kids educated</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ocean cleanup mini-game */}
                <section className="py-8 px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold mb-4 text-blue-800">Play &amp; Save the Ocean</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Help clean the ocean in our mini-game! Collect floating trash and earn a 10% discount on your subscription
                            while learning about ocean pollution.
                        </p>
                    </div>

                    <OceanCleanupGame onGameComplete={handleGameComplete} />
                </section>

                {/* Product Purchasing Section - Minimalist */}
                <section className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Choose Your Subscription</h2>

                        <div className="space-y-3 mb-6">
                            <div
                                onClick={() => setSubscriptionPlan('monthly')}
                                className={`p-4 rounded-md cursor-pointer transition-all ${subscriptionPlan === 'monthly'
                                    ? 'bg-kids-purple bg-opacity-20 border-2 border-kids-purple'
                                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Monthly</h3>
                                        <p className="text-sm text-gray-600">3 T-shirts every month</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">₹999</p>
                                        <p className="text-xs text-gray-500">per month</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                onClick={() => setSubscriptionPlan('quarterly')}
                                className={`p-4 rounded-md cursor-pointer transition-all ${subscriptionPlan === 'quarterly'
                                    ? 'bg-kids-purple bg-opacity-20 border-2 border-kids-purple'
                                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Quarterly</h3>
                                        <p className="text-sm text-gray-600">3 T-shirts every 3 months</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">₹2,799</p>
                                        <p className="text-xs text-gray-500">₹933 per month (Save 10%)</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                onClick={() => setSubscriptionPlan('yearly')}
                                className={`p-4 rounded-md cursor-pointer transition-all ${subscriptionPlan === 'yearly'
                                    ? 'bg-kids-purple bg-opacity-20 border-2 border-kids-purple'
                                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Yearly</h3>
                                        <p className="text-sm text-gray-600">3 T-shirts every season</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">₹9,999</p>
                                        <p className="text-xs text-gray-500">₹833 per month (Save 15%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold mb-3 text-gray-900">Size</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['small', 'medium', 'large', 'x-large'].map((sizeOption) => (
                                        <button
                                            key={sizeOption}
                                            onClick={() => setSize(sizeOption)}
                                            className={`py-2 px-4 rounded-md transition-all ${size === sizeOption
                                                ? 'bg-gray-900 text-white'
                                                : 'bg-white border border-gray-300 hover:border-gray-400 text-gray-700'
                                                }`}
                                        >
                                            {sizeOption.charAt(0).toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-3 text-gray-900">Quantity</h3>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="bg-white border border-gray-300 text-gray-700 w-10 h-10 flex items-center justify-center rounded-md hover:border-gray-400"
                                    >
                                        -
                                    </button>
                                    <span className="mx-4 font-bold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="bg-white border border-gray-300 text-gray-700 w-10 h-10 flex items-center justify-center rounded-md hover:border-gray-400"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Your Order</h3>

                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-gray-700">
                                    <span>T-shirts ({subscriptionPlan})</span>
                                    <span>₹{planPrices[subscriptionPlan]} × {quantity}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-600">FREE</span>
                                </div>

                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>₹{updateTotalPrice().toFixed(2)}</span>
                                    </div>
                                    <div className="text-xs text-green-600 text-right mt-1">
                                        50% goes to ocean cleanup efforts
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-kids-purple hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-colors">
                                Subscribe Now
                            </button>

                            <div className="mt-4 text-xs text-center text-gray-500">
                                <p>Free cancellation anytime • 5-7 day delivery</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Minimalist Design Gallery */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">The Designs</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                            <div className="aspect-square bg-blue-100 rounded-md mb-3 flex items-center justify-center overflow-hidden group-hover:bg-blue-200 transition-all">
                                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">👤</div>
                            </div>
                            <h3 className="font-bold text-gray-900">Stick Figure Watch</h3>
                            <p className="text-sm text-gray-600">Simple but charming stick figure design</p>
                        </div>

                        <div className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                            <div className="aspect-square bg-green-100 rounded-md mb-3 flex items-center justify-center overflow-hidden group-hover:bg-green-200 transition-all">
                                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🚢</div>
                            </div>
                            <h3 className="font-bold text-gray-900">Titanic Adventure</h3>
                            <p className="text-sm text-gray-600">Adyant's interpretation of the Titanic</p>
                        </div>

                        <div className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                            <div className="aspect-square bg-purple-100 rounded-md mb-3 flex items-center justify-center overflow-hidden group-hover:bg-purple-200 transition-all">
                                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🎮</div>
                            </div>
                            <h3 className="font-bold text-gray-900">Minecraft World</h3>
                            <p className="text-sm text-gray-600">Adyant's take on Minecraft characters</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA - Simple */}
                <section className="bg-gray-800 p-8 rounded-md text-center text-white mb-8">
                    <h2 className="text-2xl font-bold mb-3">Join Adyant's Mission</h2>
                    <p className="text-lg mb-6">
                        Exclusive designs. Premium comfort. Real impact.
                    </p>
                    <button className="bg-white text-gray-800 py-3 px-8 rounded-md font-bold hover:bg-gray-100 transition-colors">
                        Get Your First Pack
                    </button>
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