import React from 'react';

const PrivacyNotice = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg max-w-2xl mx-auto my-8 border-2 border-blue-200">
            <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-2">🔒</span>
                <h2 className="text-2xl font-bold text-blue-600">Our Super Simple Privacy Promise!</h2>
            </div>

            <div className="space-y-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700 text-lg">
                        Hey there! 👋 We're so happy you're here!
                        We only use essential cookies to make the website work properly - like remembering your game progress! 🎮
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700 text-lg">
                        We never collect personal info from kids under 13 without asking a grown-up first!
                        Your safety is our top priority! 🛡️
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700 text-lg">
                        By using our site, you're agreeing to our super simple privacy rules!
                        We only use necessary cookies to make everything work smoothly! 😊
                    </p>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-500">
                        Last updated: March 2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyNotice; 