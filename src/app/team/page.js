"use client";

import React from 'react';

export default function TeamPage() {
    const teamMembers = [
        {
            name: "Adyant",
            age: "6 years old",
            role: "Founder",
            description: "Hi! I'm Adyant, and I love Minecraft! I started this project because I want to help keep our oceans clean while having fun building and creating.",
            emoji: "👋"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Meet Our Ocean Hero
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    A young Minecraft enthusiast on a mission to make ocean conservation fun and engaging for kids everywhere!
                </p>

                <div className="flex justify-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform max-w-sm"
                        >
                            <div className="text-5xl mb-4 text-center animate-bounce">
                                {member.emoji}
                            </div>
                            <h2 className="text-2xl font-bold text-blue-900 text-center mb-2">
                                {member.name}
                            </h2>
                            <p className="text-blue-600 text-center mb-2">
                                {member.age}
                            </p>
                            <p className="text-blue-700 font-semibold text-center mb-4">
                                {member.role}
                            </p>
                            <p className="text-gray-600 text-center">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 