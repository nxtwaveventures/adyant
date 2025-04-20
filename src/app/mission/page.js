"use client";

import Navbar from '../../components/Navbar';
import DonationTracker from '../../components/DonationTracker';
import OceanCleanupGame from '../../components/OceanCleanupGame';
import Link from 'next/link';

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <Navbar />

            <div className="container py-16 px-4 max-w-5xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-8">
                        Play & Make a Difference
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Hi! I'm Adyant. At 6 years old, I'm turning my love for art into action.
                        Join me in cleaning our oceans while having fun!
                    </p>
                </div>

                {/* Game Section */}
                <div className="bg-white p-12 rounded-2xl mb-24 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">Ocean Cleanup Game</h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Help clean our virtual ocean and earn real discounts on my t-shirts and watches.
                                Score 200+ points to unlock special offers!
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl mb-8">
                                <h3 className="text-xl font-bold text-blue-700 mb-4">How to Play:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center text-lg">
                                        <span className="text-2xl mr-4">1️⃣</span>
                                        <span>Play the cleanup game</span>
                                    </li>
                                    <li className="flex items-center text-lg">
                                        <span className="text-2xl mr-4">2️⃣</span>
                                        <span>Score 200+ points</span>
                                    </li>
                                    <li className="flex items-center text-lg">
                                        <span className="text-2xl mr-4">3️⃣</span>
                                        <span>Get your discount code</span>
                                    </li>
                                    <li className="flex items-center text-lg">
                                        <span className="text-2xl mr-4">4️⃣</span>
                                        <span>Use it on my designs!</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <OceanCleanupGame />
                        </div>
                    </div>
                </div>

                {/* Impact Tracker */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Impact So Far</h2>
                    <DonationTracker />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-800 mb-8">Ocean Impact</h2>
                        <div className="space-y-6 text-lg">
                            <p className="flex items-center justify-center gap-4">
                                <span className="text-green-500 text-2xl">✓</span>
                                <span>120kg plastic waste removed</span>
                            </p>
                            <p className="flex items-center justify-center gap-4">
                                <span className="text-green-500 text-2xl">✓</span>
                                <span>3 cleanup organizations supported</span>
                            </p>
                            <p className="flex items-center justify-center gap-4">
                                <span className="text-green-500 text-2xl">✓</span>
                                <span>500+ children educated</span>
                            </p>
                            <p className="flex items-center justify-center gap-4">
                                <span className="text-green-500 text-2xl">✓</span>
                                <span>50% proceeds to conservation</span>
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-800 mb-8">Join the Mission</h2>
                        <div className="space-y-8">
                            <div className="p-6">
                                <div className="text-4xl mb-4">👕</div>
                                <p className="text-lg text-gray-700">Shop ocean-inspired designs</p>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl mb-4">🎮</div>
                                <p className="text-lg text-gray-700">Play and earn discounts</p>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl mb-4">🌊</div>
                                <p className="text-lg text-gray-700">Share our mission</p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <Link href="/art"
                                className="inline-block px-12 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Explore Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-12">
                <div className="container text-center max-w-xl mx-auto">
                    <p className="text-2xl font-bold mb-4">Adyant's Ocean Mission</p>
                    <p className="text-lg">Kid-designed fashion for cleaner oceans</p>
                </div>
            </footer>
        </div>
    );
} 