'use client';

import { useState, useEffect, useRef } from 'react';

const OceanCleanupGame = ({ onGameComplete }) => {
    // Game state
    const [gameStarted, setGameStarted] = useState(false);
    const [gameCompleted, setGameCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [difficulty, setDifficulty] = useState('medium');
    const [trashItems, setTrashItems] = useState([]);
    const [couponCode, setCouponCode] = useState('');
    const [showCoupon, setShowCoupon] = useState(false);
    const [currentFact, setCurrentFact] = useState(0);
    const [scorePopups, setScorePopups] = useState([]);
    const [oceanHealth, setOceanHealth] = useState(0);
    const [marineAnimals, setMarineAnimals] = useState([]);
    const [discountCode, setDiscountCode] = useState('');
    const [showInstructions, setShowInstructions] = useState(true);

    const gameAreaRef = useRef(null);
    const animationRef = useRef(null);

    // Ocean pollution facts
    const oceanFacts = [
        "Over 8 million tons of plastic enter our oceans every year",
        "By 2050, there could be more plastic than fish in the oceans",
        "Plastic has been found in the deepest part of the ocean, the Mariana Trench",
        "A single plastic bottle can take 450 years to decompose in the ocean",
        "Microplastics have been found in 94% of tap water samples worldwide",
        "Over 100,000 marine mammals and sea turtles die from plastic pollution annually",
        "Plankton, which produce 70% of our oxygen, are ingesting microplastics",
        "The Great Pacific Garbage Patch is three times the size of France"
    ];

    // Use emojis as fallbacks for missing image files
    const trashTypes = [
        { type: 'bottle', points: 10, image: '/images/plastic-bottle.png', emoji: '🧴' },
        { type: 'bag', points: 15, image: '/images/plastic-bag.png', emoji: '🛍️' },
        { type: 'straw', points: 5, image: '/images/plastic-straw.png', emoji: '🥤' },
        { type: 'can', points: 10, image: '/images/soda-can.png', emoji: '🥫' },
        { type: 'net', points: 20, image: '/images/fishing-net.png', emoji: '🕸️' },
    ];

    // Marine animal types
    const animalTypes = [
        { type: 'fish', image: '/images/fish.png', emoji: '🐠' },
        { type: 'turtle', image: '/images/turtle.png', emoji: '🐢' },
        { type: 'dolphin', image: '/images/dolphin.png', emoji: '🐬' },
    ];

    // Generate random coupon code
    const generateCouponCode = () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let result = 'OCEAN';
        for (let i = 0; i < 5; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCouponCode(result);
    };

    // Initialize game settings based on difficulty
    const initializeGame = () => {
        setGameStarted(true);
        setScore(0);
        setTimeLeft(60);
        setOceanHealth(0);
        setTrashItems([]);
        setScorePopups([]);
        setShowCoupon(false);
        setDiscountCode('');
        setShowInstructions(false);

        let time = 60;
        if (difficulty === 'easy') time = 90;
        if (difficulty === 'hard') time = 45;

        setTimeLeft(time);
        generateCouponCode();

        // Initialize with 10 trash items
        const initialTrash = Array(10).fill().map(() => generateTrashItem());
        setTrashItems(initialTrash);

        // Initialize with 5 marine animals
        const initialAnimals = Array(5).fill().map(() => generateMarineAnimal());
        setMarineAnimals(initialAnimals);
    };

    // Generate a random position within game area bounds
    const generateRandomPosition = () => {
        if (!gameAreaRef.current) return { x: 0, y: 0 };

        const gameArea = gameAreaRef.current;
        const gameWidth = gameArea.offsetWidth;
        const gameHeight = gameArea.offsetHeight;

        return {
            x: Math.floor(Math.random() * (gameWidth - 60)),
            y: Math.floor(Math.random() * (gameHeight - 60)),
        };
    };

    // Generate a random trash item
    const generateTrashItem = () => {
        const trashType = trashTypes[Math.floor(Math.random() * trashTypes.length)];
        const position = generateRandomPosition();

        return {
            id: Date.now() + Math.random(),
            ...trashType,
            x: position.x,
            y: position.y,
            rotation: Math.random() * 360,
            collected: false,
        };
    };

    // Generate a random marine animal
    const generateMarineAnimal = () => {
        const animalType = animalTypes[Math.floor(Math.random() * animalTypes.length)];
        const position = generateRandomPosition();
        const direction = Math.random() > 0.5 ? 1 : -1;

        return {
            id: Date.now() + Math.random(),
            ...animalType,
            x: position.x,
            y: position.y,
            direction,
            speed: 1 + Math.random() * 2,
        };
    };

    // Generate a discount code
    const generateDiscountCode = () => {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let result = 'OCEAN';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    // Start the game
    const startGame = () => {
        setScore(0);
        setTimeLeft(60);
        setGameStarted(true);
        setGameCompleted(false);
        setDiscountCode('');
        setShowInstructions(false);

        // Initialize with 10 trash items
        const initialTrash = Array(10).fill().map(() => generateTrashItem());
        setTrashItems(initialTrash);

        // Initialize with 5 marine animals
        const initialAnimals = Array(5).fill().map(() => generateMarineAnimal());
        setMarineAnimals(initialAnimals);
    };

    // Handle clicking on a trash item
    const handleTrashClick = (id) => {
        if (!gameStarted || gameCompleted) return;

        setTrashItems(prevItems =>
            prevItems.map(item => {
                if (item.id === id && !item.collected) {
                    setScore(prevScore => prevScore + item.points);
                    return { ...item, collected: true };
                }
                return item;
            })
        );
    };

    // Game timer effect
    useEffect(() => {
        if (!gameStarted || gameCompleted) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    endGame();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [gameStarted, gameCompleted]);

    // Add new trash items periodically
    useEffect(() => {
        if (!gameStarted || gameCompleted) return;

        const trashInterval = setInterval(() => {
            if (trashItems.filter(item => !item.collected).length < 15) {
                setTrashItems(prev => [...prev, generateTrashItem()]);
            }
        }, 2000);

        return () => clearInterval(trashInterval);
    }, [gameStarted, trashItems]);

    // Move marine animals
    useEffect(() => {
        if (!gameStarted || !gameAreaRef.current) return;

        const gameArea = gameAreaRef.current;
        const gameWidth = gameArea.offsetWidth;

        const animalInterval = setInterval(() => {
            setMarineAnimals(prev =>
                prev.map(animal => {
                    let newX = animal.x + (animal.speed * animal.direction);
                    let newDirection = animal.direction;

                    // Change direction if hitting boundary
                    if (newX <= 0 || newX >= gameWidth - 60) {
                        newDirection = -newDirection;
                        newX = animal.x + (animal.speed * newDirection);
                    }

                    return {
                        ...animal,
                        x: newX,
                        direction: newDirection,
                    };
                })
            );
        }, 50);

        return () => clearInterval(animalInterval);
    }, [gameStarted, marineAnimals]);

    // End the game
    const endGame = () => {
        setGameStarted(false);
        setGameCompleted(true);

        // Generate discount code if score is high enough
        if (score >= 200) {
            setDiscountCode(generateDiscountCode());
            if (onGameComplete) {
                onGameComplete(discountCode);
            }
        }
    };

    // Reset game
    const resetGame = () => {
        setGameStarted(false);
        setGameCompleted(false);
        setTrashItems([]);
    };

    // Rotate through ocean facts
    useEffect(() => {
        const factInterval = setInterval(() => {
            setCurrentFact(prev => (prev + 1) % oceanFacts.length);
        }, 5000);

        return () => clearInterval(factInterval);
    }, []);

    return (
        <div className="relative bg-blue-100 rounded-lg overflow-hidden">
            {showInstructions ? (
                <div className="p-8 text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Ocean Cleanup Challenge</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">How to Play:</h3>
                        <ul className="text-left space-y-2 mb-6">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">1.</span>
                                <span>Click on trash items floating in the ocean to collect them</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">2.</span>
                                <span>Each type of trash is worth different points</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">3.</span>
                                <span>Be quick! You only have 60 seconds</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">4.</span>
                                <span>Score 200+ points to earn a special discount code for Adyant merchandise!</span>
                            </li>
                        </ul>
                        <button
                            onClick={startGame}
                            className="start-button"
                        >
                            Start Cleaning!
                        </button>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                        {trashTypes.map((trash) => (
                            <div key={trash.type} className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                                <div className="text-4xl mb-2">
                                    {trash.emoji}
                                </div>
                                <p className="text-sm font-medium">{trash.type.charAt(0).toUpperCase() + trash.type.slice(1)}</p>
                                <p className="text-xs text-blue-600">{trash.points} pts</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : gameCompleted ? (
                <div className="p-8 text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Game Over!</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <p className="text-2xl font-bold mb-2">Your Score: {score}</p>
                        {discountCode ? (
                            <div className="discount-reward">
                                <h4>Congratulations! You've earned a 10% discount:</h4>
                                <p className="text-2xl font-mono my-2">{discountCode}</p>
                                <p className="text-sm">Use this code at checkout on any Adyant merchandise.</p>
                            </div>
                        ) : (
                            <p className="text-gray-600 mb-6">Score 200+ points to earn a discount code!</p>
                        )}
                        <button
                            onClick={startGame}
                            className="play-again-button"
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center bg-blue-800 text-white p-4">
                        <div className="text-lg font-bold">Score: {score}</div>
                        <div className="text-lg font-bold">Time: {timeLeft}s</div>
                    </div>
                    <div
                        ref={gameAreaRef}
                        className="game-area"
                    >
                        {/* Marine animals */}
                        {marineAnimals.map(animal => (
                            <div
                                key={animal.id}
                                className="marine-animal"
                                style={{
                                    left: `${animal.x}px`,
                                    top: `${animal.y}px`,
                                    transform: `scaleX(${animal.direction > 0 ? 1 : -1})`,
                                }}
                            >
                                <div className="text-4xl">{animal.emoji}</div>
                            </div>
                        ))}

                        {/* Trash items */}
                        {trashItems.map(item => !item.collected && (
                            <div
                                key={item.id}
                                className="trash-item"
                                style={{
                                    left: `${item.x}px`,
                                    top: `${item.y}px`,
                                    transform: `rotate(${item.rotation}deg)`,
                                }}
                                onClick={() => handleTrashClick(item.id)}
                            >
                                <div className="text-4xl">{item.emoji}</div>
                            </div>
                        ))}

                        {/* Ocean waves visualization */}
                        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
                            <div className="absolute w-full h-10 bg-blue-200 opacity-30"
                                style={{ bottom: '0', transform: 'rotate(-2deg) scale(1.2)' }}></div>
                            <div className="absolute w-full h-8 bg-blue-100 opacity-20"
                                style={{ bottom: '5px', transform: 'rotate(1deg) scale(1.1)' }}></div>
                        </div>
                    </div>

                    <div className="p-4 bg-white">
                        <div className="text-sm text-blue-800 italic mb-2">
                            <strong>Ocean fact:</strong> Every minute, a garbage truck's worth of plastic enters our oceans.
                        </div>
                        <div className="ocean-health">
                            <span className="text-sm font-medium">Ocean Health: {Math.min(100, Math.floor(score / 2))}%</span>
                            <div className="health-bar">
                                <div
                                    className="health-fill"
                                    style={{ width: `${Math.min(100, Math.floor(score / 2))}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default OceanCleanupGame; 