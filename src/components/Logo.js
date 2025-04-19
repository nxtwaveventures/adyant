import React from 'react';

const Logo = ({ className = '', width = 80, height = 80 }) => {
    return (
        <div className={`relative ${className}`} style={{ width, height }}>
            <svg
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Letter A */}
                <path
                    d="M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z"
                    fill="#1CB5AB"
                    className="transition-all duration-300 hover:fill-[#00B4DB]"
                />

                {/* Bird body - emerald green */}
                <path
                    d="M400 300 Q450 250 500 300 T600 350 Q550 400 500 350 T400 300"
                    fill="#1CB5AB"
                    className="transition-all duration-300 hover:fill-[#00B4DB]"
                />

                {/* Bird chest - golden yellow */}
                <path
                    d="M450 320 Q475 300 500 320 T550 350 Q525 370 500 350 T450 320"
                    fill="#FFD700"
                    className="transition-all duration-300"
                />

                {/* Berries - teal circles */}
                <circle cx="350" cy="500" r="20" fill="#00B4DB" className="transition-all duration-300" />
                <circle cx="390" cy="520" r="20" fill="#00B4DB" className="transition-all duration-300" />
                <circle cx="430" cy="500" r="20" fill="#00B4DB" className="transition-all duration-300" />

                {/* Leaves - emerald green */}
                <path
                    d="M360 480 Q380 460 400 480 T440 500"
                    stroke="#1CB5AB"
                    strokeWidth="8"
                    fill="none"
                    className="transition-all duration-300"
                />
                <path
                    d="M380 500 Q400 480 420 500 T460 520"
                    stroke="#1CB5AB"
                    strokeWidth="8"
                    fill="none"
                    className="transition-all duration-300"
                />
            </svg>
        </div>
    );
};

export default Logo; 