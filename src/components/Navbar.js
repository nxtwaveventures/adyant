"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';
import Cart from './Cart';
import Logo from './Logo';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState('/');
    const { cartOpen, setCartOpen, totalItems } = useCart();

    // Handle scroll events for navbar transformation
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Set active link based on current pathname
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            setActiveLink(window.location.pathname);
        }
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-white md:bg-transparent'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo width={50} height={50} className="hover:scale-110 transition-transform duration-300" />
                            <span className={`text-2xl font-bold transition-colors ${scrolled || isMenuOpen ? 'text-blue-600' : 'text-blue-600 md:text-white'}`}>
                                Adyant's Fun World
                            </span>
                        </Link>

                        <div className="flex items-center">
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex space-x-6 mr-4">
                                {[
                                    { href: '/', label: 'Home' },
                                    { href: '/videos', label: 'Videos' },
                                    { href: '/art', label: 'T-shirts' },
                                    { href: '/stories', label: 'Stories' },
                                    { href: '/mission', label: 'Our Mission' }
                                ].map((link, index) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`font-medium transition-colors ${activeLink === link.href
                                            ? 'text-blue-600 font-bold'
                                            : scrolled
                                                ? 'text-gray-800 hover:text-blue-600'
                                                : 'text-blue-700 hover:text-blue-500'}`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Cart Button */}
                            <button
                                onClick={() => setCartOpen(true)}
                                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors mr-2"
                                aria-label="Cart"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                {totalItems > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden p-2 z-50 relative"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : scrolled ? 'bg-gray-800' : 'bg-gray-800 md:bg-white'}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${isMenuOpen ? 'opacity-0' : scrolled ? 'bg-gray-800' : 'bg-gray-800 md:bg-white'}`}></div>
                                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : scrolled ? 'bg-gray-800' : 'bg-gray-800 md:bg-white'}`}></div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu with animation */}
            <div className={`fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-700 transition-all duration-500 flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center space-y-8">
                    {[
                        { href: '/', label: 'Home', delay: '0ms' },
                        { href: '/videos', label: 'Videos', delay: '100ms' },
                        { href: '/art', label: 'T-shirts', delay: '200ms' },
                        { href: '/stories', label: 'Stories', delay: '300ms' },
                        { href: '/mission', label: 'Our Mission', delay: '400ms' }
                    ].map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl text-white font-bold transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{
                                transitionDelay: isMenuOpen ? link.delay : '0ms'
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Cart Sidebar */}
            <Cart />

            {/* Navbar placeholder to prevent content from being hidden under the fixed navbar */}
            <div className={`w-full ${scrolled ? 'h-16' : 'h-20'} transition-all duration-300`}></div>
        </>
    );
};

export default Navbar;