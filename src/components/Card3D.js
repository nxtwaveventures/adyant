"use client";

import { useState, useRef, useEffect } from 'react';

export default function Card3D({ children, className = '', intensity = 15, perspective = 1000, shine = true }) {
    const cardRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [style, setStyle] = useState({});
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // Calculate mouse position relative to card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Convert to percentage (-0.5 to 0.5 range)
        const xPercent = (x / rect.width) - 0.5;
        const yPercent = (y / rect.height) - 0.5;

        setPosition({ x: xPercent, y: yPercent });
    };

    useEffect(() => {
        if (!isHovering) {
            // Reset card position when not hovering
            setStyle({
                transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                transition: 'transform 0.6s ease-out'
            });
            return;
        }

        // Calculate rotation angles based on mouse position and intensity
        const rotateY = position.x * intensity;
        const rotateX = -position.y * intensity;  // Inverted for natural effect

        // Apply transforms
        setStyle({
            transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
            transition: 'transform 0.1s ease-out',
        });

    }, [position, isHovering, intensity, perspective]);

    // Create shine effect based on mouse position
    const shineStyle = shine && isHovering ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(
      ${135 + position.x * 30}deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, ${0.15 + Math.abs(position.x) * 0.15}) 50%,
      rgba(255, 255, 255, 0) 100%
    )`,
        pointerEvents: 'none',
        zIndex: 2
    } : {};

    return (
        <div
            ref={cardRef}
            className={`relative overflow-hidden ${className}`}
            style={{
                ...style,
                transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
            {shine && <div style={shineStyle} />}
        </div>
    );
} 