"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import PrivacyBanner from '../components/PrivacyBanner';

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

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <>
            {children}
            <PrivacyBanner />
            {isMounted && <AnimatedCursor />}
        </>
    );
} 