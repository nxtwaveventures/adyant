"use client";

import { useState, useEffect } from 'react';

export default function PrivacyBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already accepted the privacy policy
        const hasAccepted = localStorage.getItem('privacy_accepted');
        if (!hasAccepted) {
            setIsVisible(true);
        }
    }, []);

    const acceptPrivacy = () => {
        localStorage.setItem('privacy_accepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-blue-200 shadow-lg z-50">
            <div className="container mx-auto p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0 text-gray-700 text-sm md:text-base max-w-3xl">
                        <p className="mb-1"><strong>Privacy Notice for Kids and Parents:</strong></p>
                        <p>
                            This is a kid-friendly website. We use cookies only for necessary functions.
                            We don't collect personal information from children under 13 without parental consent.
                            By using this site, you agree to our kid-friendly privacy practices.
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={acceptPrivacy}
                            className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors text-sm md:text-base flex items-center gap-2 border-2 border-amber-900"
                        >
                            <span role="img" aria-label="cookie" className="text-lg">🍪</span> I Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 