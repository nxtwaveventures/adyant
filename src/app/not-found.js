"use client";

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function NotFound() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <div className="bg-blue-50 p-6 rounded-xl mb-12 text-center">
                    <div className="text-8xl mb-4">🔍</div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
                    <p className="text-gray-700 mb-8">
                        Oops! We couldn't find the page you were looking for.
                    </p>

                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-auto">
                <div className="container text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Let's find something awesome together!</p>
                </div>
            </footer>
        </div>
    );
} 