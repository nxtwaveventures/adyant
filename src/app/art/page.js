"use client";

import Navbar from '../../components/Navbar';
import ArtShop from '../../components/ArtShop';
import Link from 'next/link';

export default function ArtPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <Navbar />

            <div className="container py-16 px-4 max-w-5xl mx-auto">
                {/* Hero Section with more whitespace */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-8">
                        Ocean-Inspired Designs
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Unique artwork by 6-year-old Adyant, bringing ocean conservation
                        to life through a child's imagination.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/mission"
                            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                            Play & Earn
                        </Link>
                        <Link href="#shop"
                            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-600">
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Impact Statement - New Minimalist Section */}
                <div className="text-center mb-24">
                    <p className="text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        50% of every purchase helps remove plastic from our oceans
                    </p>
                </div>

                {/* Shopping Options with more space */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <Link href="/art/t-shirt-catalogue"
                        className="block bg-white rounded-2xl p-12 hover:shadow-xl transition-all border border-gray-100">
                        <div className="text-5xl mb-6">👕</div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">Individual T-Shirts</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Explore our collection of unique t-shirts featuring original ocean-inspired artwork.
                        </p>
                    </Link>

                    <Link href="/art/t-shirt-subscription"
                        className="block bg-white rounded-2xl p-12 hover:shadow-xl transition-all border border-gray-100">
                        <div className="text-5xl mb-6">🎁</div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">Monthly Subscription</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Get a new eco-friendly t-shirt monthly and save 20% while making a bigger impact.
                        </p>
                    </Link>
                </div>

                {/* Impact Icons - Minimalist Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    <div className="text-center">
                        <div className="text-5xl mb-6">🌊</div>
                        <p className="text-lg text-gray-700">50% funds ocean cleanup</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl mb-6">🎨</div>
                        <p className="text-lg text-gray-700">Kid-designed artwork</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl mb-6">♻️</div>
                        <p className="text-lg text-gray-700">Eco-friendly materials</p>
                    </div>
                </div>

                {/* Shop Section - Cleaner Layout */}
                <div id="shop" className="mb-24">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Latest Designs</h2>
                    <ArtShop />
                </div>

                {/* Reviews - Minimalist Style */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Customer Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="text-yellow-400 flex justify-center mb-6">
                                ★★★★★
                            </div>
                            <p className="text-lg text-gray-700 mb-4">"My son loves his ocean t-shirt! The design is so cute and knowing we're helping clean the oceans makes it even better."</p>
                            <p className="font-medium text-blue-800">Priya M.</p>
                        </div>

                        <div className="text-center">
                            <div className="text-yellow-400 flex justify-center mb-6">
                                ★★★★★
                            </div>
                            <p className="text-lg text-gray-700 mb-4">"The ocean cleanup game is engaging and educational. The t-shirts are great quality too!"</p>
                            <p className="font-medium text-blue-800">Rahul K.</p>
                        </div>

                        <div className="text-center">
                            <div className="text-yellow-400 flex justify-center mb-6">
                                ★★★★★
                            </div>
                            <p className="text-lg text-gray-700 mb-4">"Supporting a cause while getting unique designs by a child. My nephew loves it!"</p>
                            <p className="font-medium text-blue-800">Anika S.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-12">
                <div className="container text-center max-w-xl mx-auto">
                    <p className="text-2xl font-bold mb-4">Adyant's Ocean Mission</p>
                    <p className="text-lg">Kid-designed fashion for cleaner oceans</p>
                </div>
            </footer>
        </div>
    );
} 