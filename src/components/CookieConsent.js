"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            setIsVisible(false);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white p-4 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm mb-4 md:mb-0">
                    We use cookies to make our website fun and safe! 🍪 Learn more in our{' '}
                    <Link href="/privacy" className="underline hover:text-blue-200">
                        Privacy Notice
                    </Link>
                </p>
                <button
                    onClick={handleAccept}
                    className="bg-white text-blue-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
                >
                    Got it! 👍
                </button>
            </div>
        </div>
    );
};

export default CookieConsent; 