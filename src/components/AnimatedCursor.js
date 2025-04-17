"use client";

import { useState, useEffect, useRef } from 'react';

export default function AnimatedCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Position the main cursor directly at mouse position
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        // Add event listeners for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');

        const handleInteractiveMouseEnter = () => setIsHovering(true);
        const handleInteractiveMouseLeave = () => setIsHovering(false);

        interactiveElements.forEach((element) => {
            element.addEventListener('mouseenter', handleInteractiveMouseEnter);
            element.addEventListener('mouseleave', handleInteractiveMouseLeave);
        });

        // Handle mouse events
        document.addEventListener('mousedown', () => setIsClicking(true));
        document.addEventListener('mouseup', () => setIsClicking(false));

        // Animate the follower with a slight delay for smooth effect
        const animateFollower = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;

            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';

            requestAnimationFrame(animateFollower);
        };

        animateFollower();

        // Cleanup event listeners
        return () => {
            interactiveElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleInteractiveMouseEnter);
                element.removeEventListener('mouseleave', handleInteractiveMouseLeave);
            });

            document.removeEventListener('mousedown', () => setIsClicking(true));
            document.removeEventListener('mouseup', () => setIsClicking(false));
        };
    }, []);

    // Hide the cursor on mobile/touch devices
    useEffect(() => {
        const isTouchDevice = () => {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        };

        if (isTouchDevice()) {
            if (cursorRef.current) cursorRef.current.style.display = 'none';
            if (followerRef.current) followerRef.current.style.display = 'none';
        }
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ${isClicking ? 'bg-kids-yellow scale-75' : 'bg-white'
                    } ${isHovering ? 'opacity-0' : 'opacity-100'}`}
                style={{
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                ref={followerRef}
                className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-300 border-2 ${isClicking ? 'border-kids-yellow scale-150' : 'border-white'
                    } ${isHovering ? 'scale-150 bg-white bg-opacity-20' : 'scale-100 bg-transparent'}`}
                style={{
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    );
} 