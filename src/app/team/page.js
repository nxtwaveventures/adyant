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
        },
        {
            name: "Alex",
            age: "8 years old",
            role: "Creative Director",
            description: "I love designing new Minecraft builds and coming up with fun ways to teach other kids about ocean conservation!",
            emoji: "🎨"
        },
        {
            name: "Sam",
            age: "10 years old",
            role: "Game Master",
            description: "I help create fun mini-games and challenges that make learning about ocean cleanup exciting for everyone.",
            emoji: "🎮"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Meet Our Ocean Heroes
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    We're a team of young Minecraft enthusiasts on a mission to make ocean conservation fun and engaging for kids everywhere!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform"
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

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                        Want to Join Our Team?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        If you're a young Minecraft player who loves the ocean and wants to make a difference, we'd love to hear from you!
                    </p>
                </div>
            </div>
        </div>
    );
} 