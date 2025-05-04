"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StoriesPage = () => {
    const stories = [
        {
            id: 1,
            title: "The Little Cloud",
            description: "Join Puffy the cloud on an adventure to clean the ocean!",
            ageGroup: "Ages 4-8",
            readTime: "5 min read",
            category: "Ocean Conservation",
            color: "from-blue-400 to-blue-600",
            slug: "the-little-cloud"
        },
        {
            id: 2,
            title: "Ocean Friends",
            description: "Meet the amazing creatures that call the ocean their home!",
            ageGroup: "Ages 4-8",
            readTime: "5 min read",
            category: "Ocean Life",
            color: "from-blue-400 to-blue-600",
            slug: "ocean-friends"
        },
        {
            id: 3,
            title: "The Magical Forest",
            description: "Discover the secrets of a forest where trees can talk and animals are your friends!",
            ageGroup: "Ages 4-8",
            readTime: "5 min read",
            category: "Nature",
            color: "from-green-400 to-green-600",
            slug: "the-magical-forest"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                        Interactive Stories
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our collection of interactive stories that teach children about nature, conservation, and friendship through engaging animations and activities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <Link
                            href={`/stories/${story.slug}`}
                            key={story.id}
                            className="group"
                        >
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <div className={`h-48 bg-gradient-to-br ${story.color} relative`}>
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white text-4xl font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                            {story.title.charAt(0)}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                        {story.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {story.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                            {story.ageGroup}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                            {story.readTime}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                            {story.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                                            Read Now
                                        </span>
                                        <svg
                                            className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Get Weekly Stories
                    </h2>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Subscribe to receive a new interactive story every week, along with fun activities and learning resources.
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoriesPage; 