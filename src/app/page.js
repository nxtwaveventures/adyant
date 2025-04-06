"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Simple memory card game component
function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [canFlip, setCanFlip] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  
  const cardEmojis = [
    { id: 1, emoji: "⚽", alt: "Football" },
    { id: 2, emoji: "🎮", alt: "Gamepad" },
    { id: 3, emoji: "🧸", alt: "Toy" },
    { id: 4, emoji: "🤖", alt: "Robot" },
    { id: 5, emoji: "🎨", alt: "Drawing" },
    { id: 6, emoji: "🌮", alt: "Taco Bell" },
    { id: 7, emoji: "📱", alt: "iPad" },
  ];
  
  const initGame = () => {
    // Create pairs of cards
    const duplicatedCards = [...cardEmojis, ...cardEmojis]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
    
    setCards(duplicatedCards);
    setFlipped([]);
    setMatched([]);
    setCanFlip(true);
    setGameStarted(true);
  };
  
  const handleCardClick = (uniqueId) => {
    // Don't allow flipping if two cards are already flipped or clicking on matched card
    if (!canFlip || flipped.includes(uniqueId) || matched.includes(uniqueId)) return;
    
    // Add card to flipped array
    const newFlipped = [...flipped, uniqueId];
    setFlipped(newFlipped);
    
    // Check if we have a pair
    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find(card => card.uniqueId === firstId);
      const secondCard = cards.find(card => card.uniqueId === secondId);
      
      // Check if cards match
      if (firstCard.id === secondCard.id) {
        setMatched([...matched, firstId, secondId]);
        setFlipped([]);
      } else {
        // Briefly disable flipping while cards are face up
        setCanFlip(false);
        // Flip cards back after 1 second
        setTimeout(() => {
          setFlipped([]);
          setCanFlip(true);
        }, 1000);
      }
    }
  };
  
  // Check for win condition
  useEffect(() => {
    if (gameStarted && matched.length === cards.length && cards.length > 0) {
      setTimeout(() => {
        alert("You won! Great job!");
      }, 500);
    }
  }, [matched, cards, gameStarted]);
  
  return (
    <div className="game-container">
      <h3 className="text-xl font-bold mb-4">Memory Game</h3>
      {!gameStarted ? (
        <button onClick={initGame} className="mb-4">Start Game</button>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-3">
            {cards.map((card) => (
              <div 
                key={card.uniqueId}
                onClick={() => handleCardClick(card.uniqueId)}
                className={`card h-20 w-20 cursor-pointer bg-primary rounded-lg flex items-center justify-center shadow-md transition-transform ${
                  flipped.includes(card.uniqueId) || matched.includes(card.uniqueId) 
                    ? 'bg-secondary' 
                    : ''
                } ${matched.includes(card.uniqueId) ? 'opacity-70' : ''}`}
              >
                {(flipped.includes(card.uniqueId) || matched.includes(card.uniqueId)) ? (
                  <div className="text-3xl">{card.emoji}</div>
                ) : null}
              </div>
            ))}
          </div>
          <button onClick={initGame} className="mt-4">Reset Game</button>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="navbar">
        <div className="container">
          <h1 className="text-3xl font-bold text-center">Adyant's Fun World</h1>
        </div>
      </nav>
      
      <div className="container">
        {/* Hero section */}
        <section className="section mb-8 bg-secondary">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Hi! I'm Adyant</h2>
              <p className="text-lg mb-4">
                Welcome to my fun website! Here you can learn about all the things I love and even play a cool game.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="h-60 w-60 rounded-full bg-primary flex items-center justify-center text-4xl">
                👋
              </div>
            </div>
          </div>
        </section>
        
        {/* Interests Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Football */}
          <section className="section bg-accent">
            <h2 className="text-xl font-bold mb-3">Football</h2>
            <p className="mb-4">
              I love playing football! My favorite position is forward, and I practice my kicks every day. I follow all the big tournaments and dream of being a football star one day!
            </p>
            <div className="text-5xl text-center">⚽</div>
          </section>

          {/* iPad */}
          <section className="section bg-primary">
            <h2 className="text-xl font-bold mb-3">iPad</h2>
            <p className="mb-4">
              My iPad is one of my favorite things! I use it to play games, watch videos, and learn new things. I've become really good at all my favorite apps and can navigate it like a pro!
            </p>
            <div className="text-5xl text-center">📱</div>
          </section>

          {/* Taco Bell */}
          <section className="section bg-highlight">
            <h2 className="text-xl font-bold mb-3">Taco Bell</h2>
            <p className="mb-4">
              Taco Bell is my favorite restaurant! I love going there for quesadillas and nachos. The best part is getting a cool toy with my kids meal. It's always a special treat when we go there!
            </p>
            <div className="text-5xl text-center">🌮</div>
          </section>

          {/* Drawing */}
          <section className="section bg-secondary">
            <h2 className="text-xl font-bold mb-3">Drawing</h2>
            <p className="mb-4">
              I love to draw and create colorful artwork! I can spend hours with my markers and crayons making pictures of everything I see. My fridge at home is covered with all my masterpieces!
            </p>
            <div className="text-5xl text-center">🎨</div>
          </section>
          
          {/* Arcade Games */}
          <section className="section bg-accent">
            <h2 className="text-xl font-bold mb-3">Arcade Games</h2>
            <p className="mb-4">
              Playing arcade games is so much fun! I love racing games, shooting games, and especially the ones where you can win tickets. My high score is always at the top of the leaderboard!
            </p>
            <div className="text-5xl text-center">🎮</div>
          </section>
          
          {/* Toys */}
          <section className="section bg-primary">
            <h2 className="text-xl font-bold mb-3">Toys</h2>
            <p className="mb-4">
              My toy collection is always growing! I especially love action figures, building blocks, and remote control cars. My room is like a toy museum with all my favorite toys on display!
            </p>
            <div className="text-5xl text-center">🧸</div>
          </section>
        </div>
        
        {/* Memory Game */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Let's Play a Game!</h2>
          <p className="mb-4">
            Try this memory game! Flip the cards and find the matching pairs. Can you match all of them?
          </p>
          <MemoryGame />
        </section>
      </div>
      
      <footer className="navbar mt-12">
        <div className="container text-center">
          <p>Adyant's Fun World © 2025</p>
        </div>
      </footer>
    </div>
  );
}
