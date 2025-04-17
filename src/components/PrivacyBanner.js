"use client";

import { useState, useEffect } from 'react';

export default function PrivacyBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted privacy terms
        const hasAccepted = localStorage.getItem('privacyAccepted');
        if (!hasAccepted) {
            setShowBanner(true);
        }
    }, []);

    const acceptPrivacy = () => {
        localStorage.setItem('privacyAccepted', 'true');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-foreground text-white p-4 z-50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0 md:mr-6">
                        <p className="text-sm">
                            <strong>Privacy Notice:</strong> This website respects the privacy of children.
                            We only use first names, never share personal information, and all content is
                            supervised by parents. No cookies are used for tracking purposes.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={acceptPrivacy}
                            className="bg-accent text-foreground font-bold py-2 px-4 rounded-lg text-sm whitespace-nowrap hover:opacity-90"
                        >
                            I Understand
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 