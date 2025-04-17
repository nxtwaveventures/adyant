'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import OceanCleanupGame from '@/components/OceanCleanupGame';
import Link from 'next/link';

export default function OceanCleanupPage() {
    const [showImpact, setShowImpact] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImpact(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-blue-50 min-h-screen">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-blue-800 mb-4">Ocean Cleanup Challenge</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Help clean our virtual ocean by collecting trash! Earn points and learn about ocean conservation.
                        Score 200+ points to earn a special discount on Adyant merchandise.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                    <OceanCleanupGame />
                </div>

                {showImpact && (
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Ocean Conservation Matters</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Oceans produce over 50% of the world's oxygen and absorb 50x more CO2 than our atmosphere</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Over 800 marine species are affected by ocean plastic pollution</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>By 2050, there could be more plastic than fish in the ocean by weight</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Healthy oceans regulate our climate and are crucial for biodiversity</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-bold text-blue-700 mb-4">How We're Making a Difference</h2>
                            <p className="mb-4">At Adyant Creation, 50% of all proceeds go directly to ocean cleanup initiatives and environmental education programs.</p>
                            <div className="mb-4">
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '68%' }}></div>
                                </div>
                                <div className="flex justify-between text-sm mt-1">
                                    <span>₹0</span>
                                    <span>₹350,000 raised of ₹500,000 goal</span>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <Link href="/art/t-shirt-subscription" className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                                    Support Our Cause
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center text-gray-600 text-sm mt-8">
                    <p>© 2023 Adyant Creation. All designs copyright Adyant Creation.</p>
                </div>
            </div>
        </div>
    );
} 