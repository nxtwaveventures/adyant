"use client";

import { useState } from 'react';
import Link from 'next/link';

const mockArtProducts = [
    {
        id: "tshirt-1",
        title: "Colorful Watches T-Shirt",
        description: "Premium cotton t-shirt featuring Adyant's vibrant watch designs.",
        price: 699,
        thumbnailImage: "/images/adyant-watches-drawing.jpg",
        type: "T-Shirt",
        featured: true
    },
    {
        id: "diary-1",
        title: "Artistic Diary Cover",
        description: "Beautiful diary cover with Adyant's unique colorful watch artwork.",
        price: 349,
        thumbnailImage: "/images/art-thumbnail-1.jpg",
        type: "Diary Cover",
        featured: false
    },
    {
        id: "diary-2",
        title: "Ocean Themed Diary Cover",
        description: "Diary cover featuring Adyant's ocean-inspired designs.",
        price: 349,
        thumbnailImage: "/images/art-thumbnail-2.jpg",
        type: "Diary Cover",
        featured: false
    },
    {
        id: "bookmark-1",
        title: "Colorful Watches Bookmark",
        description: "Durable bookmark with Adyant's vibrant watch designs.",
        price: 99,
        thumbnailImage: "/images/art-thumbnail-3.jpg",
        type: "Bookmark",
        featured: false
    },
    {
        id: "bookmark-2",
        title: "Ocean Friends Bookmark",
        description: "Bookmark featuring Adyant's ocean creatures artwork.",
        price: 99,
        thumbnailImage: "/images/art-thumbnail-4.jpg",
        type: "Bookmark",
        featured: false
    },
    {
        id: "tshirt-2",
        title: "Ocean Collection T-Shirt",
        description: "100% cotton t-shirt with Adyant's ocean-themed designs.",
        price: 699,
        thumbnailImage: "/images/art-thumbnail-5.jpg",
        type: "T-Shirt",
        featured: false
    },
    {
        id: "tshirt-3",
        title: "Artistic Doodles T-Shirt",
        description: "Premium cotton t-shirt with Adyant's colorful doodle art.",
        price: 699,
        thumbnailImage: "/images/art-thumbnail-6.jpg",
        type: "T-Shirt",
        featured: false
    }
];

export default function ArtShop() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [productFilter, setProductFilter] = useState('all');

    const addToCart = (product) => {
        setCart([...cart, product]);
        // Briefly show cart
        setShowCart(true);
        setTimeout(() => {
            setShowCart(false);
        }, 3000);
    };

    const removeFromCart = (productId) => {
        const index = cart.findIndex(item => item.id === productId);
        if (index >= 0) {
            const newCart = [...cart];
            newCart.splice(index, 1);
            setCart(newCart);
        }
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // Filter products based on selected filter
    const filteredProducts = productFilter === 'all'
        ? mockArtProducts.slice(1) // Skip featured product
        : mockArtProducts.slice(1).filter(product =>
            productFilter === 'tshirt'
                ? product.type === 'T-Shirt'
                : productFilter === 'diary'
                    ? product.type === 'Diary Cover'
                    : product.type === 'Bookmark'
        );

    return (
        <div className="section bg-highlight">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">Adyant's Art Shop</h2>
                    <p className="text-sm">50% of all proceeds go to charity</p>
                </div>
                <button
                    className="relative"
                    onClick={() => setShowCart(!showCart)}
                >
                    <span className="text-2xl">🛒</span>
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.length}
                        </span>
                    )}
                </button>
            </div>

            {showCart && (
                <div className="bg-white bg-opacity-25 backdrop-blur-sm p-4 rounded-lg mb-6 border border-white border-opacity-30">
                    <h3 className="font-bold mb-3">Your Cart</h3>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center py-2 border-b border-white border-opacity-20">
                                    <div>
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-sm">{item.type}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-bold mr-4">₹{item.price}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-sm bg-white bg-opacity-30 rounded-full w-6 h-6 flex items-center justify-center hover:bg-opacity-40"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between items-center mt-4 font-bold">
                                <p>Total:</p>
                                <p>₹{totalPrice}</p>
                            </div>
                            <button
                                className="w-full mt-4 bg-accent py-2 rounded-lg font-bold"
                                onClick={() => alert('In a real implementation, this would go to a checkout page')}
                            >
                                Checkout
                            </button>
                        </>
                    )}
                </div>
            )}

            {/* Featured Product */}
            <div className="mb-8 bg-white bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Featured Product</h3>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <Link href="/art/t-shirt-catalogue" className="block">
                            <div className="bg-white p-2 rounded-lg shadow-md hover:transform hover:scale-[1.02] transition-all">
                                <div
                                    className="w-full aspect-square rounded relative bg-gradient-to-br from-kids-yellow to-kids-orange flex items-center justify-center overflow-hidden"
                                >
                                    <div className="text-center">
                                        <div className="text-6xl mb-2">👕</div>
                                        <div className="text-lg font-bold">Colorful T-Shirts</div>
                                    </div>
                                    <img
                                        src="/images/adyant-watches-drawing.jpg"
                                        alt="Adyant's T-Shirt Collection"
                                        className="w-full h-auto rounded absolute top-0 left-0 object-cover"
                                        onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <h4 className="text-lg font-bold mb-2">Colorful Watches T-Shirt</h4>
                        <p className="mb-4">
                            This premium cotton t-shirt features Adyant's vibrant watch designs.
                            Each t-shirt showcases his creative use of colors and patterns, perfect
                            for casual wear or as a special gift!
                        </p>
                        <div className="mb-4">
                            <span className="font-bold text-xl">₹699</span>
                            <span className="text-sm ml-2">Premium Quality</span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => addToCart(mockArtProducts[0])}
                                className="bg-accent text-foreground py-2 px-4 rounded-lg font-semibold hover:transform hover:scale-105 transition-all"
                            >
                                Add to Cart
                            </button>
                            <Link
                                href="/art/t-shirt-catalogue"
                                className="bg-white bg-opacity-30 py-2 px-4 rounded-lg font-semibold hover:bg-opacity-40 transition-all"
                            >
                                View Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Categories */}
            <div className="mb-8 bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Our Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                        <div className="h-16 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                <path d="M8 4a2 2 0 00-2 2v4H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-8a2 2 0 00-2-2h-2V6a2 2 0 00-2-2H8z" />
                                <path d="M12 1.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold mb-2">T-Shirts</h4>
                        <p className="text-sm mb-4">Premium cotton t-shirts with Adyant's artwork</p>
                        <button
                            onClick={() => setProductFilter('tshirt')}
                            className="bg-accent text-foreground py-2 px-4 rounded-lg font-semibold hover:transform hover:scale-105 transition-all inline-block"
                        >
                            View T-Shirts
                        </button>
                    </div>

                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                        <div className="h-16 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm4 2a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1H9z" />
                                <path d="M15 6a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold mb-2">Diary Covers</h4>
                        <p className="text-sm mb-4">Beautiful diary covers featuring Adyant's designs</p>
                        <button
                            onClick={() => setProductFilter('diary')}
                            className="bg-accent text-foreground py-2 px-4 rounded-lg font-semibold hover:transform hover:scale-105 transition-all inline-block"
                        >
                            View Diary Covers
                        </button>
                    </div>

                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                        <div className="h-16 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                <path d="M6 6.878V6a2 2 0 012-2h8a2 2 0 012 2v.878A8 8 0 0020 12a8 8 0 00-1.992 5.25A2.75 2.75 0 0116.25 20h-8.5A2.75 2.75 0 015 17.25A8 8 0 003.992 12 8 8 0 006 6.878z" />
                                <path d="M12 1.5a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold mb-2">Bookmarks</h4>
                        <p className="text-sm mb-4">Durable bookmarks with colorful designs</p>
                        <button
                            onClick={() => setProductFilter('bookmark')}
                            className="bg-accent text-foreground py-2 px-4 rounded-lg font-semibold hover:transform hover:scale-105 transition-all inline-block"
                        >
                            View Bookmarks
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Filtering */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Browse Products</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setProductFilter('all')}
                        className={`py-1 px-3 rounded-lg text-sm ${productFilter === 'all'
                            ? 'bg-accent text-foreground font-bold'
                            : 'bg-white bg-opacity-30 hover:bg-opacity-40'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setProductFilter('tshirt')}
                        className={`py-1 px-3 rounded-lg text-sm ${productFilter === 'tshirt'
                            ? 'bg-accent text-foreground font-bold'
                            : 'bg-white bg-opacity-30 hover:bg-opacity-40'
                            }`}
                    >
                        T-Shirts
                    </button>
                    <button
                        onClick={() => setProductFilter('diary')}
                        className={`py-1 px-3 rounded-lg text-sm ${productFilter === 'diary'
                            ? 'bg-accent text-foreground font-bold'
                            : 'bg-white bg-opacity-30 hover:bg-opacity-40'
                            }`}
                    >
                        Diary Covers
                    </button>
                    <button
                        onClick={() => setProductFilter('bookmark')}
                        className={`py-1 px-3 rounded-lg text-sm ${productFilter === 'bookmark'
                            ? 'bg-accent text-foreground font-bold'
                            : 'bg-white bg-opacity-30 hover:bg-opacity-40'
                            }`}
                    >
                        Bookmarks
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                    <div key={product.id} className="card p-4">
                        <div className="mb-3 bg-accent aspect-square rounded-lg overflow-hidden flex items-center justify-center">
                            {product.type === 'T-Shirt' && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                                    <path d="M8 4a2 2 0 00-2 2v4H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-8a2 2 0 00-2-2h-2V6a2 2 0 00-2-2H8z" />
                                    <path d="M12 1.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" />
                                </svg>
                            )}
                            {product.type === 'Diary Cover' && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                                    <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm4 2a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1H9z" />
                                    <path d="M15 6a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z" />
                                </svg>
                            )}
                            {product.type === 'Bookmark' && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                                    <path d="M6 6.878V6a2 2 0 012-2h8a2 2 0 012 2v.878A8 8 0 0020 12a8 8 0 00-1.992 5.25A2.75 2.75 0 0116.25 20h-8.5A2.75 2.75 0 015 17.25A8 8 0 003.992 12 8 8 0 006 6.878z" />
                                    <path d="M12 1.5a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z" />
                                </svg>
                            )}
                        </div>
                        <h3 className="font-bold mb-1">{product.title}</h3>
                        <p className="text-sm mb-3">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <p className="font-bold">₹{product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-accent text-foreground py-1 px-3 rounded-lg text-sm font-semibold hover:transform hover:scale-105 transition-all"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-white bg-opacity-20 rounded-lg">
                <h3 className="font-bold mb-2">How It Works</h3>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>Choose your favorite products from our collection</li>
                    <li>Complete your purchase securely</li>
                    <li>We'll ship your items within 2-3 business days</li>
                    <li>Enjoy your new Adyant-designed merchandise!</li>
                </ol>
                <p className="mt-4 text-sm">50% of all proceeds go directly to educational and environmental charities. Thank you for supporting our mission!</p>
            </div>
        </div>
    );
} 