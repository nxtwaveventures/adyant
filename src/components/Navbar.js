"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    // Handle scroll events for navbar transformation
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        // Set the active link based on current pathname
        const path = window.location.pathname;
        setActiveLink(path);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Fixed navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-gradient-to-r from-blue-600 to-blue-700'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Link href="/"
                            className={`text-2xl md:text-3xl font-bold transition-all relative ${scrolled ? 'text-blue-700' : 'text-white'}`}
                        >
                            <span className="relative z-10">Adyant's Fun World</span>
                            <span className={`absolute left-0 bottom-0 h-1 bg-blue-300 rounded transition-all duration-300 ${scrolled ? 'w-full opacity-20' : 'w-0 opacity-0'}`}></span>
                        </Link>

                        {/* Mobile menu button with animation */}
                        <button
                            className="md:hidden p-2 z-50 relative"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 flex flex-col justify-center items-center">
                                <span className={`block w-full h-0.5 ${scrolled ? 'bg-blue-700' : 'bg-white'} transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                                <span className={`block w-full h-0.5 ${scrolled ? 'bg-blue-700' : 'bg-white'} transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`block w-full h-0.5 ${scrolled ? 'bg-blue-700' : 'bg-white'} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                            </div>
                        </button>

                        {/* Desktop menu with hover effects */}
                        <div className="hidden md:flex space-x-6">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/videos', label: 'Videos' },
                                { href: '/art', label: 'Art Gallery' },
                                { href: '/stories', label: 'Stories' },
                                { href: '/shop', label: 'Shop' },
                                { href: '/mission', label: 'Our Mission' }
                            ].map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative font-medium transition-all duration-300 ${activeLink === link.href ?
                                        `${scrolled ? 'text-blue-700 font-bold' : 'text-white font-bold'}` :
                                        `${scrolled ? 'text-gray-700' : 'text-gray-100'} hover:${scrolled ? 'text-blue-600' : 'text-white'}`
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-300 transition-all duration-300 ${activeLink === link.href ? 'w-full' : 'w-0'}`}></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu with animation */}
                    <div className={`fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-700 transition-all duration-500 flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}>
                        <div className="flex flex-col items-center space-y-8">
                            {[
                                { href: '/', label: 'Home', delay: '0ms' },
                                { href: '/videos', label: 'Videos', delay: '100ms' },
                                { href: '/art', label: 'Art Gallery', delay: '200ms' },
                                { href: '/stories', label: 'Stories', delay: '300ms' },
                                { href: '/shop', label: 'Shop', delay: '400ms' },
                                { href: '/mission', label: 'Our Mission', delay: '500ms' }
                            ].map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-2xl text-white font-bold transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: isMenuOpen ? link.delay : '0ms'
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Navbar placeholder to prevent content from being hidden under the fixed navbar */}
            <div className={`w-full ${scrolled ? 'h-16' : 'h-20'} transition-all duration-300`}></div>
        </>
    );
} 