"use client";

import React from 'react';

const videos = [
    {
        id: 1,
        title: "Adyant Plays Minecraft!",
        description: "Watch Adyant build, explore, and go on adventures in the world of Minecraft.",
        url: "https://www.youtube.com/embed/1A2b3C4d5E6", // Replace with real video
        thumbnail: "https://img.youtube.com/vi/1A2b3C4d5E6/hqdefault.jpg"
    },
    {
        id: 2,
        title: "Adyant's Football Fun",
        description: "See Adyant show off his football skills, score goals, and have fun on the field!",
        url: "https://www.youtube.com/embed/2B3c4D5e6F7", // Replace with real video
        thumbnail: "https://img.youtube.com/vi/2B3c4D5e6F7/hqdefault.jpg"
    },
    {
        id: 3,
        title: "Adyant's Gaming Tricks for Little Ones",
        description: "Adyant shares his favorite gaming tips and tricks for young players!",
        url: "https://www.youtube.com/embed/3C4d5E6f7G8", // Replace with real video
        thumbnail: "https://img.youtube.com/vi/3C4d5E6f7G8/hqdefault.jpg"
    }
];

export default function VideosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Our Videos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                            <div className="relative aspect-video bg-gray-200">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-t-xl"
                                ></iframe>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <h2 className="text-xl font-bold text-blue-800 mb-2">{video.title}</h2>
                                <p className="text-gray-600 mb-4 flex-1">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 