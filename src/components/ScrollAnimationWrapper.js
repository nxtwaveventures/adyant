"use client";

import { useRef, useEffect, useState } from 'react';

export default function ScrollAnimationWrapper({
    children,
    animation = 'fade-in-up',
    threshold = 0.2,
    delay = 0,
    duration = 600,
    once = true,
    className = '',
}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.unobserve(elementRef.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold, once]);

    const animationStyle = {
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
    };

    // Add transform based on animation type
    if (!isVisible) {
        switch (animation) {
            case 'fade-in-up':
                animationStyle.transform = 'translateY(30px)';
                break;
            case 'fade-in-down':
                animationStyle.transform = 'translateY(-30px)';
                break;
            case 'fade-in-left':
                animationStyle.transform = 'translateX(-30px)';
                break;
            case 'fade-in-right':
                animationStyle.transform = 'translateX(30px)';
                break;
            case 'zoom-in':
                animationStyle.transform = 'scale(0.9)';
                break;
            case 'zoom-out':
                animationStyle.transform = 'scale(1.1)';
                break;
            default:
                break;
        }
    } else {
        animationStyle.transform = 'translate(0) scale(1)';
    }

    return (
        <div
            ref={elementRef}
            className={className}
            style={animationStyle}
        >
            {children}
        </div>
    );
} 