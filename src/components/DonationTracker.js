"use client";

import { useState } from 'react';
import Link from 'next/link';

const DonationTracker = () => {
    const currentAmount = 7200; // Amount in INR
    const goalAmount = 15000;   // Goal in INR
    const progress = Math.min(Math.round((currentAmount / goalAmount) * 100), 100);

    const [showDonationForm, setShowDonationForm] = useState(false);
    const [donationAmount, setDonationAmount] = useState(500);
    const [cleanupPercent, setCleanupPercent] = useState(progress);

    const simulateCleanup = () => {
        setShowDonationForm(false);

        // Calculate how much ocean is cleaned based on donation
        const newCleanupAmount = Math.min(cleanupPercent + Math.floor(donationAmount / 100), 100);
        setCleanupPercent(newCleanupAmount);

        // Alert the user about the impact of their donation
        alert(`Thank you for your donation of ₹${donationAmount}! Your contribution will help remove approximately ${Math.floor(donationAmount / 50)} grams of plastic from our oceans.`);
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Ocean Cleanup Progress</h2>

            {/* Fundraising Progress */}
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <span className="text-gray-700">₹{currentAmount.toLocaleString()} raised</span>
                    <span className="text-gray-700">Goal: ₹{goalAmount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                        className="bg-blue-600 h-4 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="text-center mt-2 text-blue-700 font-medium">
                    {progress}% of our goal
                </div>
            </div>

            {/* Ocean Facts */}
            <div className="mb-6 bg-blue-100 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Ocean Pollution Facts</h3>
                <ul className="text-gray-700 space-y-2">
                    <li>• Every year, 8 million metric tons of plastic enters our oceans</li>
                    <li>• Over 100,000 marine animals die annually from plastic entanglement</li>
                    <li>• 90% of seabirds have ingested plastic</li>
                    <li>• Healthy oceans absorb 30% of CO₂ emissions, helping combat climate change</li>
                </ul>
            </div>

            {/* Donation Button */}
            {!showDonationForm ? (
                <button
                    onClick={() => setShowDonationForm(true)}
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Donate Now
                </button>
            ) : (
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-3">Make Your Donation</h3>
                    <div className="mb-3">
                        <label className="block text-gray-700 mb-1">Amount (₹)</label>
                        <input
                            type="number"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            min="100"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setShowDonationForm(false)}
                            className="flex-1 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={simulateCleanup}
                            className="flex-1 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Donate
                        </button>
                    </div>
                </div>
            )}

            {/* Impact Section */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-blue-800 mb-3">Ocean Cleanup Achievements</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 font-bold">✓</span>
                            <span>Removed 120kg of plastic waste</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 font-bold">✓</span>
                            <span>Cleaned 3km of coastline</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 font-bold">✓</span>
                            <span>Organized 5 community cleanup events</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-blue-800 mb-3">Education Impact</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 font-bold">✓</span>
                            <span>Provided textbooks for 200 students</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 font-bold">✓</span>
                            <span>Conducted 12 environmental workshops</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 font-bold">✓</span>
                            <span>Distributed educational materials to 15 schools</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DonationTracker; 