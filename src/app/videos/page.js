"use client";

import React from 'react';

const VideosPage = () => {
    const videos = [
        {
            id: 1,
            title: "Building Fun",
            description: "Join Adyant as he builds amazing ocean-themed structures in Minecraft!",
            duration: "15:20",
            image: "/images/videos/minecraft-story.jpg",
            ageGroup: "6-12 years"
        },
        {
            id: 2,
            title: "Ocean Adventures",
            description: "Explore underwater worlds and learn about marine life in Minecraft!",
            duration: "12:45",
            image: "/images/videos/minecraft-ocean.jpg",
            ageGroup: "6-12 years"
        },
        {
            id: 3,
            title: "Minecraft Tips",
            description: "Learn cool building tricks and tips for your own Minecraft world!",
            duration: "10:30",
            image: "/images/videos/minecraft-house.jpg",
            ageGroup: "6-12 years"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Minecraft Adventures
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Join Adyant on exciting Minecraft journeys where we build, explore, and learn about ocean conservation!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                            <div className="aspect-video relative">
                                <img
                                    src={video.image}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{video.title}</h3>
                                <p className="text-gray-600 mb-4">{video.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-blue-600">{video.ageGroup}</span>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        Watch Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                        Subscribe to Our Channel
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Don't miss out on new Minecraft adventures and ocean conservation tips!
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideosPage; 