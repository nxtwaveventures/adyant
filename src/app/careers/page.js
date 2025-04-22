"use client";

import React from 'react';

export default function CareersPage() {
    const positions = [
        {
            title: "Junior Minecraft Builder",
            ageRange: "6-8 years",
            description: "Are you creative with Minecraft blocks? Join us to build amazing ocean-themed structures!",
            requirements: ["Love for Minecraft", "Interest in ocean life", "Creative building skills", "Team player"],
            emoji: "🏗️"
        },
        {
            title: "Ocean Story Creator",
            ageRange: "8-10 years",
            description: "Help us write fun stories about ocean adventures and conservation!",
            requirements: ["Love for storytelling", "Interest in marine life", "Basic writing skills", "Creative mind"],
            emoji: "📝"
        },
        {
            title: "Mini-Game Designer",
            ageRange: "9-12 years",
            description: "Design exciting Minecraft mini-games that teach about ocean conservation!",
            requirements: ["Minecraft game knowledge", "Creative ideas", "Basic game design interest", "Team spirit"],
            emoji: "🎮"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Join Our Ocean Adventure!
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Are you a young Minecraft enthusiast who wants to make a difference?
                    We're looking for creative kids to join our mission of ocean conservation through gaming!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {positions.map((position, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform"
                        >
                            <div className="text-5xl mb-4 text-center">
                                {position.emoji}
                            </div>
                            <h2 className="text-2xl font-bold text-blue-900 text-center mb-2">
                                {position.title}
                            </h2>
                            <p className="text-blue-600 text-center mb-4">
                                Age: {position.ageRange}
                            </p>
                            <p className="text-gray-600 text-center mb-6">
                                {position.description}
                            </p>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">What you need:</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    {position.requirements.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-blue-100 rounded-xl p-8 max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                        How to Apply
                    </h2>
                    <p className="text-gray-700 mb-6">
                        If you're interested in joining our team, ask your parent or guardian to send us an email with:
                    </p>
                    <ul className="text-gray-700 text-left max-w-md mx-auto space-y-2 mb-6">
                        <li>• Your name and age</li>
                        <li>• Which position interests you</li>
                        <li>• Why you want to join our team</li>
                        <li>• Your favorite thing about Minecraft</li>
                        <li>• A cool idea you have for ocean conservation</li>
                    </ul>
                    <a
                        href="mailto:join@adyantsworld.com"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Apply Now! 🌊
                    </a>
                </div>
            </div>
        </div>
    );
} 