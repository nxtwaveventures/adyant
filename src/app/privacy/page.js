'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600">Last updated: March 2024</p>
                </div>

                <div className="space-y-8">
                    <section className="bg-blue-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🍪 Our Cookie Policy</h2>
                        <p className="text-gray-700 mb-4">
                            We use cookies to make your experience on our website better! Here's what we use them for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Remembering your game progress 🎮</li>
                            <li>Making sure the website works properly ⚡</li>
                            <li>Keeping you logged in safely 🔒</li>
                        </ul>
                    </section>

                    <section className="bg-purple-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-purple-700 mb-4">👶 For Kids Under 13</h2>
                        <p className="text-gray-700">
                            We never collect personal information from children under 13 without asking a grown-up first!
                            Your safety is our top priority! 🛡️
                        </p>
                    </section>

                    <section className="bg-green-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">👨‍👩‍👧‍👦 Parent's Corner</h2>
                        <p className="text-gray-700 mb-4">
                            We follow special rules to keep your child's information safe. As a parent, you can:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Review what information we collect</li>
                            <li>Ask us to delete your child's information</li>
                            <li>Say no to us collecting information</li>
                        </ul>
                    </section>

                    <section className="bg-yellow-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🤝 Your Choices</h2>
                        <p className="text-gray-700">
                            You can choose to accept or reject cookies. If you reject cookies, some parts of our website might not work as well.
                            But that's okay! You can always change your mind later. 😊
                        </p>
                    </section>

                    <div className="text-center mt-8">
                        <Link
                            href="/"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy; 