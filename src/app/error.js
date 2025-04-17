"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Error({
    error,
    reset,
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <div className="bg-blue-50 p-6 rounded-xl mb-12 text-center">
                    <div className="text-8xl mb-4">🛠️</div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Something Went Wrong</h1>
                    <p className="text-gray-700 mb-8">
                        We're sorry, but something went wrong while loading this page.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => reset()}
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Return to Home
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-auto">
                <div className="container text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">We'll fix this right away!</p>
                </div>
            </footer>
        </div>
    );
} 