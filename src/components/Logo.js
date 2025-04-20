import React from 'react';

const Logo = ({ className = '', width = 80, height = 80 }) => {
    return (
        <div className={`relative ${className}`} style={{ width, height }}>
            <svg
                width="280"
                height="280"
                viewBox="0 0 280 280"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                <defs>
                    <linearGradient id="peacockGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0a6e66" />
                        <stop offset="100%" stopColor="#1E4D91" />
                    </linearGradient>
                    <linearGradient id="birdGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FCD34D" />
                        <stop offset="100%" stopColor="#2E8B57" />
                    </linearGradient>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00B4D8" />
                        <stop offset="100%" stopColor="#0096c7" />
                    </linearGradient>
                </defs>

                {/* Letter A */}
                <path
                    d="M140 10 L220 250 H190 L140 130 L90 250 H60 L140 10 Z"
                    fill="url(#peacockGradient)"
                    className="transition-all duration-300"
                />

                {/* Smiley in A */}
                <path
                    d="M110 160 Q140 180 170 160"
                    stroke="#FFD700"
                    strokeWidth="4"
                    fill="none"
                    className="transition-all duration-300"
                />

                {/* Sparrow */}
                <circle
                    cx="150"
                    cy="105"
                    r="15"
                    fill="url(#birdGradient)"
                    className="transition-all duration-300"
                />
                <path
                    d="M135 110 Q140 90 155 100 Q165 110 150 120 Q140 125 135 110 Z"
                    fill="#2E8B57"
                    className="transition-all duration-300"
                />
                <circle
                    cx="158"
                    cy="95"
                    r="2"
                    fill="#000"
                    className="transition-all duration-300"
                />
                <path
                    d="M153 106 Q156 108 160 105"
                    stroke="black"
                    strokeWidth="1.2"
                    fill="none"
                    className="transition-all duration-300"
                />

                {/* Fruits */}
                <circle
                    cx="100"
                    cy="180"
                    r="7"
                    fill="#143D59"
                    className="transition-all duration-300"
                />
                <circle
                    cx="115"
                    cy="185"
                    r="7"
                    fill="#143D59"
                    className="transition-all duration-300"
                />
                <ellipse
                    cx="125"
                    cy="170"
                    rx="6"
                    ry="10"
                    fill="#2E8B57"
                    className="transition-all duration-300"
                />

                {/* Upward-pointing Wave */}
                <path
                    d="M170 215 
                       Q180 205 195 210 
                       Q205 215 200 195 
                       Q198 185 210 180 
                       Q195 170 185 185 
                       Q175 200 170 215 Z"
                    fill="url(#waveGradient)"
                    className="transition-all duration-300"
                />
            </svg>
        </div>
    );
};

export default Logo; 