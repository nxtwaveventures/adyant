"use client";

import { useRef, useEffect, useState } from 'react';

export default function ParticleBackground({
    count = 50,
    color = '#6200ea',
    speed = 0.5,
    size = 3,
    minDistance = 120,
    className = '',
}) {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const particlesRef = useRef([]);
    const animationRef = useRef(null);

    // Initialize particles
    const initParticles = (width, height) => {
        const particles = [];

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                size: Math.random() * size + 1,
                color: color,
            });
        }

        particlesRef.current = particles;
    };

    // Draw particles and connections
    const drawParticles = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const { width, height } = dimensions;

        ctx.clearRect(0, 0, width, height);

        const particles = particlesRef.current;

        // Update and draw particles
        particles.forEach((particle, i) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off walls
            if (particle.x < 0 || particle.x > width) particle.vx = -particle.vx;
            if (particle.y < 0 || particle.y > height) particle.vy = -particle.vy;

            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[j].x - particle.x;
                const dy = particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < minDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${(1 - distance / minDistance) * 0.5})`;
                    ctx.stroke();
                }
            }
        });

        animationRef.current = requestAnimationFrame(drawParticles);
    };

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const width = canvasRef.current.clientWidth;
                const height = canvasRef.current.clientHeight;

                setDimensions({ width, height });
                canvasRef.current.width = width;
                canvasRef.current.height = height;

                initParticles(width, height);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [count, color, speed, size]);

    // Start animation when dimensions change
    useEffect(() => {
        if (dimensions.width > 0 && dimensions.height > 0) {
            drawParticles();
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [dimensions]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full ${className}`}
            style={{ zIndex: 0 }}
        />
    );
} 