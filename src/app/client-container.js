"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import PrivacyBanner from '../components/PrivacyBanner';
import ErrorBoundary from '../components/ErrorBoundary';

// Dynamically import the AnimatedCursor to avoid SSR issues
const AnimatedCursor = dynamic(() => import('../components/AnimatedCursor'), {
    ssr: false
});

export default function ClientContainer({ children }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Add smooth scrolling to the document
        document.documentElement.style.scrollBehavior = 'smooth';

        // Handle any unhandled promise rejections (including connection errors)
        const handleUnhandledRejection = (event) => {
            event.preventDefault();
            console.error('Connection error:', event.reason);

            // Only reload if it's a connection error
            if (event.reason?.message?.includes('Connection closed')) {
                window.location.reload();
            }
        };

        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);

    return (
        <ErrorBoundary>
            {children}
            <PrivacyBanner />
            {isMounted && <AnimatedCursor />}
        </ErrorBoundary>
    );
} 