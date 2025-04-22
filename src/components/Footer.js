"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Adyant's World</h3>
                        <p className="text-blue-200 mb-4">
                            Join me on my Minecraft adventures as we learn about ocean conservation and make the world a better place!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/videos" className="text-blue-200 hover:text-white transition-colors">
                                    Videos
                                </Link>
                            </li>
                            <li>
                                <Link href="/stories" className="text-blue-200 hover:text-white transition-colors">
                                    Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/mission" className="text-blue-200 hover:text-white transition-colors">
                                    Our Mission
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Community</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/team" className="text-blue-200 hover:text-white transition-colors">
                                    Meet the Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-blue-200 hover:text-white transition-colors">
                                    Join Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/tshirt" className="text-blue-200 hover:text-white transition-colors">
                                    T-Shirts
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors flex items-center">
                                    <span className="mr-2">🎥</span> YouTube
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@adyantsworld.com" className="text-blue-200 hover:text-white transition-colors flex items-center">
                                    <span className="mr-2">✉️</span> Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
                    <p>&copy; {new Date().getFullYear()} Adyant's World. Made with 💙 by young ocean guardians.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 