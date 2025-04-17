"use client";

import Navbar from '../../components/Navbar';
import ArtShop from '../../components/ArtShop';

export default function ArtPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Adyant's Art Gallery</h1>

                <div className="bg-blue-50 p-6 rounded-xl mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Shop & Support</h2>
                    <p className="text-gray-700 mb-8">
                        Browse through Adyant's beautiful artwork available on various products. Each purchase supports ocean conservation efforts!
                    </p>

                    <ArtShop />
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