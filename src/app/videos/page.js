"use client";

import Navbar from '../../components/Navbar';
import VideoGallery from '../../components/VideoGallery';

export default function VideosPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Adyant's Videos</h1>

                <div className="bg-blue-50 p-6 rounded-xl mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Watch & Learn</h2>
                    <p className="text-gray-700 mb-8">
                        Enjoy watching Adyant's creative videos where he shares his art process, storytelling, and more!
                    </p>

                    <VideoGallery />
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-auto">
                <div className="container text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Creative videos for curious minds!</p>
                </div>
            </footer>
        </div>
    );
} 