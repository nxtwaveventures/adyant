'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white p-4 z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    <Link href="/privacy" className="underline ml-1">
                        Learn more
                    </Link>
                </div>
                <button
                    onClick={handleAccept}
                    className="bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieConsent; 