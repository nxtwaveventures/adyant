"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const gradients = {
    happy: [
        { offset: '0%', color: '#fff' },
        { offset: '80%', color: '#bae6fd' },
        { offset: '100%', color: '#60a5fa' }
    ],
    excited: [
        { offset: '0%', color: '#fff' },
        { offset: '60%', color: '#c7d2fe' },
        { offset: '100%', color: '#a5b4fc' }
    ],
    sad: [
        { offset: '0%', color: '#e5e7eb' },
        { offset: '100%', color: '#a1a1aa' }
    ],
    cleaning: [
        { offset: '0%', color: '#e0f2fe' },
        { offset: '100%', color: '#38bdf8' }
    ]
};

export default function StoryContent({ story }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [score, setScore] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [puffyMood, setPuffyMood] = useState('happy');

    const goToNextPage = () => {
        if (currentPage < story.content.length - 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setIsAnimating(false);
            }, 500);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setIsAnimating(false);
            }, 500);
        }
    };

    const handleInteraction = (points) => {
        setScore(prev => prev + points);
        setPuffyMood('excited');
        setTimeout(() => setPuffyMood('happy'), 1000);
        setTimeout(goToNextPage, 1500);
    };

    const renderPuffy = (size = 'medium', mood = 'happy') => {
        // Responsive SVG: 80% width, max 400px, centered
        return (
            <div style={{ width: '80%', maxWidth: 400, margin: '0 auto' }}>
                <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 128 80"
                    className="animate-float"
                    style={{ display: 'block', filter: 'drop-shadow(0 4px 16px #bae6fd)' }}
                >
                    <defs>
                        <radialGradient id={`puffyGrad-${mood}`} cx="50%" cy="50%" r="70%">
                            {(gradients[mood] || gradients.happy).map((stop, i) => (
                                <stop key={i} offset={stop.offset} stopColor={stop.color} />
                            ))}
                        </radialGradient>
                        <radialGradient id="puffyHighlight" cx="30%" cy="30%" r="50%">
                            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    {/* Main cloud body */}
                    <ellipse cx="64" cy="40" rx="48" ry="28" fill={`url(#puffyGrad-${mood})`} />
                    {/* Fluffy bumps */}
                    <ellipse cx="32" cy="48" rx="16" ry="12" fill={`url(#puffyGrad-${mood})`} />
                    <ellipse cx="96" cy="48" rx="16" ry="12" fill={`url(#puffyGrad-${mood})`} />
                    <ellipse cx="48" cy="28" rx="12" ry="10" fill={`url(#puffyGrad-${mood})`} />
                    <ellipse cx="80" cy="28" rx="12" ry="10" fill={`url(#puffyGrad-${mood})`} />
                    {/* Highlight */}
                    <ellipse cx="54" cy="32" rx="10" ry="6" fill="url(#puffyHighlight)" />
                    {/* Eyes */}
                    <ellipse cx="54" cy="44" rx="5" ry="6" fill="#22223b" />
                    <ellipse cx="74" cy="44" rx="5" ry="6" fill="#22223b" />
                    {/* Eye highlights */}
                    <ellipse cx="56" cy="42" rx="1.2" ry="1.5" fill="#fff" opacity="0.7" />
                    <ellipse cx="76" cy="42" rx="1.2" ry="1.5" fill="#fff" opacity="0.7" />
                    {/* Mouth (mood-based) */}
                    {mood === 'happy' && (
                        <ellipse cx="64" cy="56" rx="7" ry="4" fill="#22223b" />
                    )}
                    {mood === 'excited' && (
                        <ellipse cx="64" cy="56" rx="9" ry="5" fill="#fbbf24" />
                    )}
                    {mood === 'sad' && (
                        <ellipse cx="64" cy="56" rx="7" ry="3" fill="#64748b" />
                    )}
                    {mood === 'cleaning' && (
                        <ellipse cx="64" cy="56" rx="7" ry="4" fill="#0ea5e9" />
                    )}
                    {/* Sparkles for excited mood */}
                    {mood === 'excited' && (
                        <>
                            <circle cx="40" cy="30" r="2" fill="#fbbf24" className="animate-sparkle" />
                            <circle cx="88" cy="26" r="1.5" fill="#fbbf24" className="animate-sparkle" />
                            <circle cx="70" cy="18" r="1.2" fill="#fbbf24" className="animate-sparkle" />
                        </>
                    )}
                </svg>
            </div>
        );
    };

    const renderInteractiveContent = () => {
        switch (story.slug) {
            case "the-little-cloud":
                return renderCloudStory();
            case "ocean-friends":
                return renderOceanFriendsStory();
            case "the-magical-forest":
                return renderMagicalForestStory();
            default:
                return null;
        }
    };

    const renderCloudStory = () => {
        switch (currentPage) {
            case 0:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-blue-300 to-blue-100 rounded-lg overflow-hidden">
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                            {renderPuffy('medium', puffyMood)}
                        </div>
                        {/* Animated SVG Wave */}
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-24">
                            <svg viewBox="0 0 256 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#93c5fd" />
                                        <stop offset="100%" stopColor="#e0f2fe" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" fill="url(#oceanGradient)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z;
                                                M0 28 Q32 20 64 28 T128 20 T192 28 T256 28 V48 H0 Z;
                                                M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Make Puffy Happy!
                        </button>
                    </div>
                );
            case 1:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-blue-300 to-blue-100 rounded-lg overflow-hidden">
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                            {renderPuffy('large', puffyMood)}
                        </div>
                        {/* Animated SVG Wave */}
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-24">
                            <svg viewBox="0 0 256 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanGradient2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#bae6fd" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" fill="url(#oceanGradient2)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z;
                                                M0 28 Q32 20 64 28 T128 20 T192 28 T256 28 V48 H0 Z;
                                                M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-4 h-4 bg-gray-400 rounded-full animate-float"
                                    style={{
                                        left: `${i * 30}px`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                ></div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Help Puffy Clean the Ocean!
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-blue-300 to-blue-100 rounded-lg overflow-hidden">
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                            {renderPuffy('large', 'cleaning')}
                        </div>
                        {/* Animated SVG Wave */}
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-24">
                            <svg viewBox="0 0 256 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanGradient3" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#e0f2fe" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" fill="url(#oceanGradient3)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z;
                                                M0 28 Q32 20 64 28 T128 20 T192 28 T256 28 V48 H0 Z;
                                                M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-2 h-8 bg-blue-400 rounded-b-full animate-rain"
                                    style={{
                                        left: `${i * 20}px`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                ></div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Make it Rain!
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-blue-300 to-blue-100 rounded-lg overflow-hidden">
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                            {renderPuffy('medium', puffyMood)}
                        </div>
                        {/* Animated SVG Wave */}
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-24">
                            <svg viewBox="0 0 256 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanGradient4" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#bae6fd" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" fill="url(#oceanGradient4)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z;
                                                M0 28 Q32 20 64 28 T128 20 T192 28 T256 28 V48 H0 Z;
                                                M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full animate-bounce"
                                    style={{
                                        left: `${i * 30}px`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                ></div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Thank the Sea Creatures!
                        </button>
                    </div>
                );
            case 4:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-blue-300 to-blue-100 rounded-lg overflow-hidden">
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                            {renderPuffy('medium', puffyMood)}
                        </div>
                        {/* Animated SVG Wave */}
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-24">
                            <svg viewBox="0 0 256 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanGradient5" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#bae6fd" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" fill="url(#oceanGradient5)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z;
                                                M0 28 Q32 20 64 28 T128 20 T192 28 T256 28 V48 H0 Z;
                                                M0 24 Q32 48 64 24 T128 24 T192 24 T256 24 V48 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-3 h-3 bg-white rounded-full animate-sparkle"
                                    style={{
                                        left: `${i * 25}px`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                ></div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Complete the Story!
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderOceanFriendsStory = () => {
        switch (currentPage) {
            case 0:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-cyan-200 to-blue-100 rounded-lg overflow-hidden">
                        {/* SVG Ocean Background */}
                        <div className="absolute bottom-0 left-0 w-full h-32">
                            <svg viewBox="0 0 400 64" fill="none" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanFriendsGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#bae6fd" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z" fill="url(#oceanFriendsGradient)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z;
                                                M0 36 Q50 28 100 36 T200 28 T300 36 T400 36 V64 H0 Z;
                                                M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        {/* Dolphin SVG, click to jump */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="120" height="60" viewBox="0 0 120 60">
                                <ellipse cx="60" cy="40" rx="40" ry="18" fill="#38bdf8" />
                                <ellipse cx="90" cy="38" rx="10" ry="6" fill="#0ea5e9" />
                                <ellipse cx="40" cy="38" rx="10" ry="6" fill="#0ea5e9" />
                                {/* Eye */}
                                <ellipse cx="80" cy="38" rx="2" ry="2.5" fill="#22223b" />
                                {/* Smile */}
                                <ellipse cx="85" cy="45" rx="4" ry="1.5" fill="#fff" />
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Make Dolphin Jump!
                        </button>
                    </div>
                );
            case 1:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-cyan-200 to-blue-100 rounded-lg overflow-hidden">
                        {/* SVG Ocean Background */}
                        <div className="absolute bottom-0 left-0 w-full h-32">
                            <svg viewBox="0 0 400 64" fill="none" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanFriendsGradient2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#bae6fd" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z" fill="url(#oceanFriendsGradient2)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z;
                                                M0 36 Q50 28 100 36 T200 28 T300 36 T400 36 V64 H0 Z;
                                                M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        {/* Fish SVG, click to swim */}
                        <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="60" height="40" viewBox="0 0 60 40">
                                <ellipse cx="30" cy="20" rx="18" ry="10" fill="#fbbf24" />
                                <polygon points="48,20 60,10 60,30" fill="#f59e42" />
                                {/* Eye */}
                                <ellipse cx="38" cy="18" rx="2" ry="2.5" fill="#22223b" />
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-orange-400 text-white px-6 py-3 rounded-full hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
                        >
                            Make Fish Swim!
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-cyan-200 to-blue-100 rounded-lg overflow-hidden">
                        {/* SVG Ocean Background */}
                        <div className="absolute bottom-0 left-0 w-full h-32">
                            <svg viewBox="0 0 400 64" fill="none" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanFriendsGradient3" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#bae6fd" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z" fill="url(#oceanFriendsGradient3)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z;
                                                M0 36 Q50 28 100 36 T200 28 T300 36 T400 36 V64 H0 Z;
                                                M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        {/* Turtle SVG, click to wave */}
                        <div className="absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="60" height="40" viewBox="0 0 60 40">
                                <ellipse cx="30" cy="20" rx="16" ry="10" fill="#34d399" />
                                <ellipse cx="30" cy="32" rx="10" ry="4" fill="#059669" />
                                {/* Head */}
                                <ellipse cx="44" cy="20" rx="5" ry="6" fill="#34d399" />
                                {/* Eye */}
                                <ellipse cx="46" cy="18" rx="1.2" ry="1.5" fill="#22223b" />
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full hover:from-green-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Make Turtle Wave!
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-cyan-200 to-blue-100 rounded-lg overflow-hidden">
                        {/* SVG Ocean Background */}
                        <div className="absolute bottom-0 left-0 w-full h-32">
                            <svg viewBox="0 0 400 64" fill="none" className="w-full h-full animate-wave">
                                <defs>
                                    <linearGradient id="oceanFriendsGradient4" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#bae6fd" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z" fill="url(#oceanFriendsGradient4)" opacity="0.8">
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                        values="M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z;
                                                M0 36 Q50 28 100 36 T200 28 T300 36 T400 36 V64 H0 Z;
                                                M0 32 Q50 64 100 32 T200 32 T300 32 T400 32 V64 H0 Z" />
                                </path>
                            </svg>
                        </div>
                        {/* All friends together */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                            {/* Dolphin */}
                            <svg width="60" height="30" viewBox="0 0 120 60">
                                <ellipse cx="60" cy="40" rx="40" ry="18" fill="#38bdf8" />
                                <ellipse cx="90" cy="38" rx="10" ry="6" fill="#0ea5e9" />
                                <ellipse cx="40" cy="38" rx="10" ry="6" fill="#0ea5e9" />
                                <ellipse cx="80" cy="38" rx="2" ry="2.5" fill="#22223b" />
                                <ellipse cx="85" cy="45" rx="4" ry="1.5" fill="#fff" />
                            </svg>
                            {/* Fish */}
                            <svg width="30" height="20" viewBox="0 0 60 40">
                                <ellipse cx="30" cy="20" rx="18" ry="10" fill="#fbbf24" />
                                <polygon points="48,20 60,10 60,30" fill="#f59e42" />
                                <ellipse cx="38" cy="18" rx="2" ry="2.5" fill="#22223b" />
                            </svg>
                            {/* Turtle */}
                            <svg width="30" height="20" viewBox="0 0 60 40">
                                <ellipse cx="30" cy="20" rx="16" ry="10" fill="#34d399" />
                                <ellipse cx="30" cy="32" rx="10" ry="4" fill="#059669" />
                                <ellipse cx="44" cy="20" rx="5" ry="6" fill="#34d399" />
                                <ellipse cx="46" cy="18" rx="1.2" ry="1.5" fill="#22223b" />
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Celebrate Ocean Friends!
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderMagicalForestStory = () => {
        switch (currentPage) {
            case 0:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-green-200 to-green-50 rounded-lg overflow-hidden">
                        {/* SVG Forest Background */}
                        <div className="absolute bottom-0 left-0 w-full h-32">
                            <svg viewBox="0 0 400 64" fill="none" className="w-full h-full">
                                <defs>
                                    <linearGradient id="forestGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#4ade80" />
                                        <stop offset="100%" stopColor="#bbf7d0" />
                                    </linearGradient>
                                </defs>
                                <ellipse cx="200" cy="64" rx="200" ry="32" fill="url(#forestGradient)" />
                            </svg>
                        </div>
                        {/* Fox SVG, click to wag tail */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="80" height="50" viewBox="0 0 80 50">
                                <ellipse cx="40" cy="30" rx="20" ry="12" fill="#f97316" />
                                <ellipse cx="60" cy="38" rx="8" ry="4" fill="#fbbf24" />
                                {/* Head */}
                                <ellipse cx="30" cy="20" rx="10" ry="8" fill="#f97316" />
                                {/* Ear */}
                                <polygon points="22,12 28,8 30,18" fill="#f59e42" />
                                <polygon points="38,12 32,8 30,18" fill="#f59e42" />
                                {/* Eye */}
                                <ellipse cx="28" cy="20" rx="1.2" ry="1.5" fill="#22223b" />
                                {/* Nose */}
                                <ellipse cx="24" cy="24" rx="1.2" ry="1.2" fill="#22223b" />
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 py-3 rounded-full hover:from-orange-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Make Fox Wag Tail!
                        </button>
                    </div>
                );
            case 1:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-green-200 to-green-50 rounded-lg overflow-hidden">
                        {/* SVG Forest Background */}
                        <div className="absolute bottom-0 left-0 w-full h-32">
                            <svg viewBox="0 0 400 64" fill="none" className="w-full h-full">
                                <defs>
                                    <linearGradient id="forestGradient2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#4ade80" />
                                        <stop offset="100%" stopColor="#bbf7d0" />
                                    </linearGradient>
                                </defs>
                                <ellipse cx="200" cy="64" rx="200" ry="32" fill="url(#forestGradient2)" />
                            </svg>
                        </div>
                        {/* Tree SVG, click to sway */}
                        <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="40" height="60" viewBox="0 0 40 60">
                                <rect x="16" y="40" width="8" height="20" fill="#a3e635" />
                                <ellipse cx="20" cy="30" rx="16" ry="18" fill="#22c55e" />
                                {/* Face */}
                                <ellipse cx="16" cy="30" rx="2" ry="2.5" fill="#22223b" />
                                <ellipse cx="24" cy="30" rx="2" ry="2.5" fill="#22223b" />
                                <ellipse cx="20" cy="36" rx="4" ry="2" fill="#166534" />
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Make Tree Sway!
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-green-200 to-green-50 rounded-lg overflow-hidden">
                        {/* SVG Forest Background */}
                        <div className="absolute bottom-0 left-0 w-full h-32">
                            <svg viewBox="0 0 400 64" fill="none" className="w-full h-full">
                                <defs>
                                    <linearGradient id="forestGradient3" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#4ade80" />
                                        <stop offset="100%" stopColor="#bbf7d0" />
                                    </linearGradient>
                                </defs>
                                <ellipse cx="200" cy="64" rx="200" ry="32" fill="url(#forestGradient3)" />
                            </svg>
                        </div>
                        {/* Bird SVG, click to fly */}
                        <div className="absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="40" height="30" viewBox="0 0 40 30">
                                <ellipse cx="20" cy="20" rx="12" ry="8" fill="#fbbf24" />
                                <ellipse cx="28" cy="18" rx="4" ry="2" fill="#f59e42" />
                                {/* Eye */}
                                <ellipse cx="24" cy="18" rx="1.2" ry="1.5" fill="#22223b" />
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-orange-400 text-white px-6 py-3 rounded-full hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
                        >
                            Make Bird Fly!
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className="relative h-[400px] bg-gradient-to-b from-green-200 to-green-50 rounded-lg overflow-hidden">
                        {/* SVG Forest Background */}
                        <div className="absolute bottom-0 left-0 w-full h-32">
                            <svg viewBox="0 0 400 64" fill="none" className="w-full h-full">
                                <defs>
                                    <linearGradient id="forestGradient4" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#4ade80" />
                                        <stop offset="100%" stopColor="#bbf7d0" />
                                    </linearGradient>
                                </defs>
                                <ellipse cx="200" cy="64" rx="200" ry="32" fill="url(#forestGradient4)" />
                            </svg>
                        </div>
                        {/* All friends together */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                            {/* Fox */}
                            <svg width="40" height="25" viewBox="0 0 80 50">
                                <ellipse cx="40" cy="30" rx="20" ry="12" fill="#f97316" />
                                <ellipse cx="60" cy="38" rx="8" ry="4" fill="#fbbf24" />
                                <ellipse cx="30" cy="20" rx="10" ry="8" fill="#f97316" />
                                <polygon points="22,12 28,8 30,18" fill="#f59e42" />
                                <polygon points="38,12 32,8 30,18" fill="#f59e42" />
                                <ellipse cx="28" cy="20" rx="1.2" ry="1.5" fill="#22223b" />
                                <ellipse cx="24" cy="24" rx="1.2" ry="1.2" fill="#22223b" />
                            </svg>
                            {/* Tree */}
                            <svg width="20" height="30" viewBox="0 0 40 60">
                                <rect x="16" y="40" width="8" height="20" fill="#a3e635" />
                                <ellipse cx="20" cy="30" rx="16" ry="18" fill="#22c55e" />
                                <ellipse cx="16" cy="30" rx="2" ry="2.5" fill="#22223b" />
                                <ellipse cx="24" cy="30" rx="2" ry="2.5" fill="#22223b" />
                                <ellipse cx="20" cy="36" rx="4" ry="2" fill="#166534" />
                            </svg>
                            {/* Bird */}
                            <svg width="20" height="15" viewBox="0 0 40 30">
                                <ellipse cx="20" cy="20" rx="12" ry="8" fill="#fbbf24" />
                                <ellipse cx="28" cy="18" rx="4" ry="2" fill="#f59e42" />
                                <ellipse cx="24" cy="18" rx="1.2" ry="1.5" fill="#22223b" />
                            </svg>
                        </div>
                        <button
                            onClick={() => handleInteraction(10)}
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Celebrate Forest Friends!
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-8">
                <Link href="/stories" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Stories
                </Link>

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-blue-900 mb-2">{story.title}</h1>
                        <div className="flex justify-center gap-4 text-sm text-blue-600">
                            <span>{story.ageGroup}</span>
                            <span>•</span>
                            <span>{story.readTime}</span>
                            <span>•</span>
                            <span>{story.category}</span>
                        </div>
                        <div className="mt-4 text-lg font-medium text-blue-700">
                            Score: {score} points
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            {renderInteractiveContent()}
                        </div>

                        <div className="p-8">
                            <p className="text-2xl text-center text-gray-800 mb-8">
                                {story.content[currentPage].text}
                            </p>

                            <div className="flex justify-between items-center">
                                <button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 0}
                                    className={`py-3 px-6 rounded-full flex items-center ${currentPage === 0
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-200 hover:to-purple-200'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Previous
                                </button>

                                <span className="text-lg font-medium text-gray-600">
                                    Page {currentPage + 1} of {story.content.length}
                                </span>

                                <button
                                    onClick={goToNextPage}
                                    disabled={currentPage === story.content.length - 1}
                                    className={`py-3 px-6 rounded-full flex items-center ${currentPage === story.content.length - 1
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-200 hover:to-purple-200'
                                        }`}
                                >
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">For Parents:</h2>
                        <p className="text-gray-700">
                            This interactive story helps children understand the importance of ocean conservation through engaging animations and interactions.
                            As you read together, encourage your child to interact with the story elements and discuss what they learn about ocean conservation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 