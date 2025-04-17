"use client";

import Navbar from '../../components/Navbar';

export default function StoriesPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Adyant's Stories</h1>

                <div className="bg-blue-50 p-6 rounded-xl mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Storytelling Adventures</h2>
                    <p className="text-gray-700 mb-8">
                        Join Adyant for fun storytelling adventures! Interactive stories coming soon.
                    </p>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="text-6xl mb-4">📚</div>
                        <h3 className="text-xl font-bold text-blue-700">Coming Soon!</h3>
                        <p className="mt-4 text-gray-700">
                            We're working on a collection of exciting stories narrated by Adyant.
                            Check back soon for tales of adventure, friendship, and imagination!
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Story Preview</h2>
                        <p className="text-gray-700 mb-4">
                            Our upcoming stories will feature colorful characters, exciting adventures, and valuable lessons for children of all ages.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Interactive storytelling with animations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Educational themes that make learning fun</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Original stories created by Adyant</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Get Notified</h2>
                        <p className="text-gray-700 mb-4">
                            Want to be the first to know when new stories are available? Follow us on social media or check back regularly!
                        </p>
                        <div className="text-center mt-6">
                            <button className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Follow Our Updates
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-auto">
                <div className="container text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Inspiring imagination through storytelling!</p>
                </div>
            </footer>
        </div>
    );
} 