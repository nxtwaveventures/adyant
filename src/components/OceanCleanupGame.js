"use client";

import React, { useState, useEffect } from 'react';

const OceanCleanupGame = () => {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('Click on trash to clean the ocean!');

    const gridSize = 3;
    const totalCells = gridSize * gridSize;
    const maxItems = 4;

    useEffect(() => {
        startGame();
    }, []);

    const startGame = () => {
        setScore(0);
        setGameOver(false);
        setMessage('Click on trash to clean the ocean!');
        generateItems();
    };

    const generateItems = () => {
        const newItems = [];
        const positions = new Set();

        while (positions.size < maxItems) {
            const pos = Math.floor(Math.random() * totalCells);
            positions.add(pos);
        }

        positions.forEach(pos => {
            newItems.push({
                id: pos,
                type: Math.random() > 0.3 ? 'trash' : 'fish',
                position: pos
            });
        });

        setItems(newItems);
    };

    const handleCellClick = (position) => {
        if (gameOver) return;

        const clickedItem = items.find(item => item.position === position);

        if (clickedItem) {
            if (clickedItem.type === 'trash') {
                setScore(prev => prev + 10);
                setItems(prev => prev.filter(item => item.id !== clickedItem.id));
                setMessage('Great job! Keep cleaning!');

                const remainingTrash = items.filter(item => item.type === 'trash').length;
                if (remainingTrash === 1) {
                    setTimeout(() => {
                        setMessage('Amazing! Get ready for the next round!');
                        setTimeout(generateItems, 1000);
                    }, 500);
                }
            } else {
                setGameOver(true);
                setMessage('Oops! You hit a fish! Game Over!');
            }
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Score: {score}</h3>
                <p className="text-blue-700">{message}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4" style={{ maxWidth: '400px' }}>
                {Array.from({ length: totalCells }).map((_, index) => {
                    const item = items.find(item => item.position === index);
                    return (
                        <div
                            key={index}
                            onClick={() => handleCellClick(index)}
                            className={`w-24 h-24 rounded-lg cursor-pointer flex items-center justify-center text-4xl transition-all duration-200
                                ${item ?
                                    (item.type === 'trash' ? 'bg-red-400 hover:bg-red-500' : 'bg-blue-400 hover:bg-blue-500') :
                                    'bg-blue-100 hover:bg-blue-200'
                                }`}
                        >
                            {item && (
                                <span className="animate-bounce">
                                    {item.type === 'trash' ? '🗑️' : '🐠'}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            {gameOver && (
                <button
                    onClick={startGame}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Play Again
                </button>
            )}
        </div>
    );
};

export default OceanCleanupGame;

// Add to globals.css:
/*
@keyframes wave {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.animate-wave {
    animation: wave 2s linear infinite;
}

.animate-float {
    animation: float 2s ease-in-out infinite;
}
*/ 