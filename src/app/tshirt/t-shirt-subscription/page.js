"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function TShirtSubscriptionPage() {
    const [subscriptionPlan, setSubscriptionPlan] = useState('monthly');
    const [size, setSize] = useState('medium');
    const [quantity, setQuantity] = useState(1);
    const [email, setEmail] = useState('');

    const planPrices = {
        monthly: 999,
        quarterly: 2799,
        yearly: 9999
    };

    const totalPrice = planPrices[subscriptionPlan] * quantity;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would integrate with your payment processor
        alert("Thanks for subscribing! We'll contact you at " + email + " to confirm your order.");
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    <div className="flex-1 space-y-6">
                        <Link href="/art" className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-flex items-center">
                            <span>← Back to Art</span>
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">T-Shirt Subscription</h1>
                        <div className="h-1 w-16 bg-kids-purple"></div>
                        <p className="text-lg text-gray-700">
                            Get Adyant's newest designs delivered to your door regularly.
                            <span className="block mt-1">Premium cotton shirts that support ocean cleanup.</span>
                        </p>
                        <div className="bg-gray-100 inline-block px-3 py-1 rounded-md">
                            <span className="font-medium text-gray-800">From ₹999/month</span>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="relative w-full h-64 bounce-animation">
                                <Image
                                    src="/images/t-shirts/WhatsApp Image 2025-04-17 at 3.30.14 PM.jpeg"
                                    alt="Adyant's T-shirt Collection"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    className="rounded-lg"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subscription Benefits */}
                <section className="mb-12 bg-blue-50 p-8 rounded-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Why Subscribe?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4">🎁</div>
                            <h3 className="text-xl font-bold mb-2">Exclusive Designs</h3>
                            <p className="text-gray-600">Get limited edition designs not available in our regular store</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-bold mb-2">Save Money</h3>
                            <p className="text-gray-600">Up to 20% savings compared to individual purchases</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-4xl mb-4">🌊</div>
                            <h3 className="text-xl font-bold mb-2">Consistent Impact</h3>
                            <p className="text-gray-600">Your recurring subscription helps fund ocean cleanup efforts</p>
                        </div>
                    </div>
                </section>

                {/* Product Purchasing Section */}
                <section className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Choose Your Subscription</h2>

                        <div className="space-y-3 mb-6">
                            <div
                                onClick={() => setSubscriptionPlan('monthly')}
                                className={`p-4 rounded-md cursor-pointer transition-all ${subscriptionPlan === 'monthly'
                                    ? 'bg-kids-purple bg-opacity-20 border-2 border-kids-purple'
                                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Monthly</h3>
                                        <p className="text-sm text-gray-600">1 T-shirt every month</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">₹999</p>
                                        <p className="text-xs text-gray-500">per month</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                onClick={() => setSubscriptionPlan('quarterly')}
                                className={`p-4 rounded-md cursor-pointer transition-all ${subscriptionPlan === 'quarterly'
                                    ? 'bg-kids-purple bg-opacity-20 border-2 border-kids-purple'
                                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Quarterly</h3>
                                        <p className="text-sm text-gray-600">3 T-shirts every 3 months</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">₹2,799</p>
                                        <p className="text-xs text-gray-500">₹933 per month (Save 7%)</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                onClick={() => setSubscriptionPlan('yearly')}
                                className={`p-4 rounded-md cursor-pointer transition-all ${subscriptionPlan === 'yearly'
                                    ? 'bg-kids-purple bg-opacity-20 border-2 border-kids-purple'
                                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Yearly</h3>
                                        <p className="text-sm text-gray-600">12 T-shirts per year</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">₹9,999</p>
                                        <p className="text-xs text-gray-500">₹833 per month (Save 20%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">Select Size</h3>
                            <div className="flex flex-wrap gap-2">
                                {['small', 'medium', 'large', 'x-large'].map((sizeOption) => (
                                    <button
                                        key={sizeOption}
                                        onClick={() => setSize(sizeOption)}
                                        className={`px-3 py-1 rounded-md text-sm ${size === sizeOption
                                            ? 'bg-kids-purple text-white'
                                            : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {sizeOption.charAt(0).toUpperCase() + sizeOption.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">Quantity</h3>
                            <div className="flex items-center w-1/3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 bg-gray-200 text-gray-700 rounded-l-md flex items-center justify-center hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <div className="flex-1 h-10 border-t border-b border-gray-200 flex items-center justify-center">
                                    {quantity}
                                </div>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 bg-gray-200 text-gray-700 rounded-r-md flex items-center justify-center hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 self-start">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Subscription Summary</h3>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Plan:</span>
                                <span className="font-medium">{subscriptionPlan.charAt(0).toUpperCase() + subscriptionPlan.slice(1)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Size:</span>
                                <span className="font-medium">{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Quantity:</span>
                                <span className="font-medium">{quantity}</span>
                            </div>
                            <div className="flex justify-between text-gray-800 font-bold text-lg pt-2 border-t border-gray-100">
                                <span>Total:</span>
                                <span>₹{totalPrice.toLocaleString()}</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-kids-purple text-white font-bold rounded-md hover:bg-purple-700 transition-colors"
                            >
                                Subscribe Now
                            </button>
                        </form>

                        <div className="mt-4 text-center text-sm text-gray-500">
                            <p>Free shipping • Cancel anytime</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold mb-2">How often will I receive t-shirts?</h3>
                            <p className="text-gray-600">Depending on your plan: monthly subscribers receive 1 t-shirt each month, quarterly subscribers receive 3 t-shirts every 3 months, and yearly subscribers receive 12 t-shirts through the year.</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold mb-2">Can I change my size later?</h3>
                            <p className="text-gray-600">Yes! You can update your size preferences at any time by logging into your account.</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold mb-2">What if I don't like a design?</h3>
                            <p className="text-gray-600">If you're not satisfied with any t-shirt, just let us know and we'll replace it in your next shipment at no extra cost.</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold mb-2">How do you support ocean cleanup?</h3>
                            <p className="text-gray-600">50% of all subscription proceeds are donated to our partner ocean cleanup organizations that remove plastic waste from the world's oceans.</p>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Subscribe to make a difference, one t-shirt at a time</p>
                </div>
            </footer>
        </div>
    );
} 