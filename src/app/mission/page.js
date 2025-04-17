"use client";

import Navbar from '../../components/Navbar';
import DonationTracker from '../../components/DonationTracker';
import OceanCleanupGame from '../../components/OceanCleanupGame';

export default function MissionPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Ocean Mission</h1>

                <div className="bg-blue-50 p-6 rounded-xl mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Make a Difference with Play</h2>
                    <p className="text-gray-700 mb-8">
                        Help clean our virtual ocean and earn a real discount while learning about the
                        impact of ocean pollution. For every successful game, we contribute to ocean cleanup efforts!
                    </p>

                    <OceanCleanupGame />
                </div>

                <div className="mb-12">
                    <DonationTracker />
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Impact</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">✓</span>
                                <span>Over 120kg of plastic waste removed from oceans</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">✓</span>
                                <span>Partnerships with 3 local cleanup organizations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">✓</span>
                                <span>Educational resources shared with over 500 children</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">✓</span>
                                <span>50% of all proceeds go directly to conservation efforts</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Join Our Efforts</h2>
                        <p className="mb-4">There are many ways you can support Adyant's ocean conservation mission:</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Purchase merchandise with designs by Adyant</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Play our game and use your discount code</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Share our mission with friends and family</span>
                            </li>
                        </ul>
                        <div className="text-center">
                            <a href="/art/t-shirt-subscription" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Shop & Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-auto">
                <div className="container text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Together we can make our oceans clean and healthy!</p>
                </div>
            </footer>
        </div>
    );
} 