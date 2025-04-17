"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the AnimatedCursor to avoid SSR issues
const AnimatedCursor = dynamic(() => import('../components/AnimatedCursor'), {
    ssr: true // Changed from false to true to avoid server component warnings
});

export default function ClientLayout({ children }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Handle initial page load animation
    useEffect(() => {
        setIsMounted(true);

        // Simulate page loading for a smoother entry experience
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return null; // Prevents SSR flash
    }

    return (
        <>
            {/* Page Loading Animation */}
            {isLoading && (
                <div className="fixed inset-0 bg-kids-purple z-50 flex items-center justify-center">
                    <div className="relative">
                        <div className="text-4xl font-bold text-white animate-pulse">Adyant's World</div>
                        <div className="w-full h-1 bg-white bg-opacity-30 mt-4 rounded overflow-hidden">
                            <div className="h-full bg-white shimmer-effect" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            )}

            {/* AnimatedCursor will be loaded client-side */}
            <AnimatedCursor />

            <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>

            {/* Backlink to original author */}
            <div className="fixed bottom-4 right-4 text-xs text-gray-500 opacity-60 hover:opacity-100 transition-opacity z-10">
                Made with ❤️ by Adyant
            </div>
        </>
    );
} 