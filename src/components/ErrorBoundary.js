'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    const [errorInfo, setErrorInfo] = useState(null);

    useEffect(() => {
        // Add error event listener for unhandled errors
        const handleWindowError = (event) => {
            console.error("Caught unhandled error:", event.error);
            setHasError(true);
            setError(event.error || new Error("Unknown error occurred"));
            // Prevent the default browser error handling
            event.preventDefault();
        };

        window.addEventListener('error', handleWindowError);

        return () => {
            window.removeEventListener('error', handleWindowError);
        };
    }, []);

    // Reset error state - useful for retry buttons
    const resetError = () => {
        setHasError(false);
        setError(null);
        setErrorInfo(null);
    };

    if (hasError) {
        // Handle specific story page errors differently
        const isStoryPageError = error?.message?.includes('stories') ||
            window.location.pathname.includes('/stories/');

        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">{isStoryPageError ? '📚' : '🧩'}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        {isStoryPageError ? "Story Page Couldn't Load" : "Something went wrong"}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {isStoryPageError
                            ? "We're sorry, but this story couldn't load properly. The images might be missing."
                            : "We're sorry, but something didn't load properly. Please try refreshing the page."}
                    </p>
                    <div className="space-y-3">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Refresh Page
                        </button>
                        {isStoryPageError && (
                            <button
                                onClick={resetError}
                                className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Try Again Without Images
                            </button>
                        )}
                        <Link
                            href="/"
                            className="block w-full py-2 px-4 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Go to Homepage
                        </Link>
                    </div>
                    {process.env.NODE_ENV === 'development' && error && (
                        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left">
                            <p className="font-mono text-sm text-red-600 overflow-auto">{error.toString()}</p>
                            {errorInfo && (
                                <details className="mt-2">
                                    <summary className="text-xs cursor-pointer">Stack trace</summary>
                                    <pre className="text-xs mt-2 text-red-500 overflow-auto">{errorInfo.componentStack}</pre>
                                </details>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Error boundary using try-catch for client components
    try {
        return children;
    } catch (error) {
        console.error("Error caught in ErrorBoundary:", error);
        setHasError(true);
        setError(error);
        // This will re-render with the error UI on the next render cycle
        return null;
    }
} 