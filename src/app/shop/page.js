"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function ShopPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to art page for now
        router.push('/art');
    }, [router]);

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Adyant's Shop</h1>

                <div className="bg-blue-50 p-6 rounded-xl mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Redirecting to Art Shop</h2>
                    <p className="text-gray-700 mb-8">
                        Please wait while we redirect you to our Art Shop where you can browse Adyant's creations.
                    </p>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-700">Redirecting you momentarily...</p>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-auto">
                <div className="container text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Art that makes a difference!</p>
                </div>
            </footer>
        </div>
    );
} 