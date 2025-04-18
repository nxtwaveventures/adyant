"use client";

import Navbar from '../../components/Navbar';
import ArtShop from '../../components/ArtShop';
import Link from 'next/link';

export default function ArtPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Adyant's T-Shirts</h1>

                <div className="mb-8 text-center">
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Beautiful designs on premium quality t-shirts. 50% of proceeds go to ocean conservation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <Link href="/art/t-shirt-catalogue" className="block bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold text-blue-700 mb-3">Individual T-Shirts</h3>
                        <p className="text-gray-600 mb-4">Browse our collection of unique t-shirts with Adyant's original designs.</p>
                        <div className="text-blue-600 font-bold">View Catalogue →</div>
                    </Link>

                    <Link href="/art/t-shirt-subscription" className="block bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold text-blue-700 mb-3">T-Shirt Subscription</h3>
                        <p className="text-gray-600 mb-4">Receive a new t-shirt with Adyant's latest designs every month.</p>
                        <div className="text-blue-600 font-bold">Subscribe Now →</div>
                    </Link>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                    <ArtShop />
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"My son loves his ocean t-shirt! The design is so cute and knowing we're helping clean the oceans makes it even better."</p>
                            <p className="font-bold">- Priya M.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"The ocean cleanup game is so engaging! My kids play it for hours while learning about environmental issues. The t-shirts are great quality too!"</p>
                            <p className="font-bold">- Rahul K.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">"I bought this for my nephew and he won't take it off! I love supporting a cause that helps our planet while getting such a unique design made by a child."</p>
                            <p className="font-bold">- Anika S.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-auto">
                <div className="container text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">T-shirts that make a difference!</p>
                </div>
            </footer>
        </div>
    );
} 