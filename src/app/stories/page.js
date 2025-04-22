"use client";

import React from 'react';

const StoriesPage = () => {
    const stories = [
        {
            id: 1,
            title: "The Magical Forest",
            description: "Join Luna the dolphin on a magical adventure through an underwater forest!",
            image: "/images/stories/magical-forest.jpg",
            ageGroup: "4-8 years",
            readTime: "5 mins"
        },
        {
            id: 2,
            title: "Ocean Friends",
            description: "Meet the colorful sea creatures who work together to keep their home clean!",
            image: "/images/stories/ocean-friends.jpg",
            ageGroup: "3-7 years",
            readTime: "4 mins"
        },
        {
            id: 3,
            title: "The Little Cloud",
            description: "A heartwarming tale about a small cloud that helps clean the ocean!",
            image: "/images/stories/little-cloud.jpg",
            ageGroup: "4-8 years",
            readTime: "6 mins"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Ocean Stories
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Dive into magical stories that teach children about ocean conservation through fun and adventure!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                            <div className="aspect-[4/3] relative">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-blue-600/90 text-white px-2 py-1 rounded-lg text-sm">
                                    {story.readTime}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{story.title}</h3>
                                <p className="text-gray-600 mb-4">{story.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-blue-600">{story.ageGroup}</span>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        Read Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                        Get Weekly Stories
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Subscribe to receive new ocean stories and activities every week!
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoriesPage; 