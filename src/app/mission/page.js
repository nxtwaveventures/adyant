"use client";

import React from 'react';
import OceanCleanupGame from '../../components/OceanCleanupGame';

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Game Section */}
            <section className="py-8 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                        Ocean Guardian Adventure
                    </h1>
                    <p className="text-lg text-center text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join Adyant in a Minecraft-inspired mission to clean our oceans! Click on trash to collect it and help sea creatures breathe.
                    </p>
                    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4">
                        <OceanCleanupGame />
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-12 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
                        Our Ocean Impact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                            <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
                            <div className="text-base text-blue-800">Young Ocean Guardians</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                            <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                            <div className="text-base text-blue-800">Virtual Cleanups Completed</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                            <div className="text-base text-blue-800">Sea Creatures Helped</div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-base text-blue-800 max-w-2xl mx-auto">
                            Every game played helps raise awareness about ocean pollution and inspires real-world action. Together, we're making waves of change!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
} 