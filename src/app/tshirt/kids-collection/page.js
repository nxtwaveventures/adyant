"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import ProductRecommendation from '../../../components/ProductRecommendation';
import MarketplaceLinks from '../../../components/MarketplaceLinks';

export default function KidsCollectionPage() {
    const [selectedSize, setSelectedSize] = useState('6-7y');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAddedMessage, setShowAddedMessage] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const sizes = [
        { id: '3-4y', label: '3-4 Years' },
        { id: '4-5y', label: '4-5 Years' },
        { id: '6-7y', label: '6-7 Years' },
        { id: '8-9y', label: '8-9 Years' },
        { id: '10-12y', label: '10-12 Years' }
    ];

    const products = [
        {
            id: 'tshirt-red-watch',
            name: "Red Watch T-shirt",
            description: "Bright red t-shirt featuring Adyant's colorful red watch design",
            price: 499,
            type: 'T-shirt',
            image: '/images/adyant-watches-drawing.jpg',
            colors: ['Red', 'White', 'Blue']
        },
        {
            id: 'tshirt-blue-watch',
            name: "Blue Watch T-shirt",
            description: "Cool blue t-shirt with Adyant's blue and green watch design",
            price: 499,
            type: 'T-shirt',
            image: '/images/adyant-watches-drawing.jpg',
            colors: ['Blue', 'White', 'Grey']
        },
        {
            id: 'tshirt-all-watches',
            name: "All Watches T-shirt",
            description: "Fun t-shirt featuring all of Adyant's colorful watch designs",
            price: 599,
            type: 'T-shirt',
            image: '/images/adyant-watches-drawing.jpg',
            colors: ['White', 'Yellow', 'Light Blue']
        },
        {
            id: 'tote-watches',
            name: "Watches Tote Bag",
            description: "Sturdy canvas tote bag with Adyant's watch designs, perfect for school or activities",
            price: 399,
            type: 'Tote Bag',
            image: '/images/adyant-watches-drawing.jpg',
            colors: ['Natural', 'Black']
        },
        {
            id: 'notebook-watches',
            name: "Watches Sketchbook",
            description: "A5 sketchbook with high-quality paper, featuring watch designs on the cover",
            price: 249,
            type: 'Stationery',
            image: '/images/adyant-watches-drawing.jpg',
            colors: ['Multi']
        },
        {
            id: 'sticker-pack',
            name: "Watch Sticker Pack",
            description: "Set of 5 vinyl stickers featuring each individual watch design",
            price: 149,
            type: 'Stickers',
            image: '/images/adyant-watches-drawing.jpg',
            colors: ['Multi']
        },
        {
            id: 'temp-tattoos',
            name: "Watch Temporary Tattoos",
            description: "Fun temporary tattoos of Adyant's watch designs, safe for kids",
            price: 99,
            type: 'Accessories',
            image: '/images/adyant-watches-drawing.jpg',
            colors: ['Multi']
        },
        {
            id: 'bundle-creative',
            name: "Creative Kit Bundle",
            description: "Special bundle with t-shirt, sketchbook and colored pencils",
            price: 899,
            type: 'Bundle',
            image: '/images/adyant-watches-drawing.jpg',
            colors: ['Multi'],
            savings: "Save ₹150!"
        },
        {
            id: 'bundle-school',
            name: "School Pack Bundle",
            description: "Perfect for school: t-shirt, tote bag and stickers",
            price: 899,
            type: 'Bundle',
            colors: ['Multi'],
            image: '/images/adyant-watches-drawing.jpg',
            savings: "Save ₹150!"
        }
    ];

    const addToCart = () => {
        setShowAddedMessage(true);
        setTimeout(() => {
            setShowAddedMessage(false);
            setSelectedProduct(null);
        }, 3000);
    };

    const productCategories = [
        { id: 'all', name: 'All Products' },
        { id: 'tshirt', name: 'T-shirts' },
        { id: 'accessories', name: 'Accessories' },
        { id: 'bundles', name: 'Bundles' }
    ];

    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : activeCategory === 'tshirt'
            ? products.filter(p => p.type === 'T-shirt')
            : activeCategory === 'accessories'
                ? products.filter(p => ['Tote Bag', 'Stationery', 'Stickers', 'Accessories'].includes(p.type))
                : products.filter(p => p.type === 'Bundle');

    // Add marketplace product IDs for integration
    const marketplaceInfo = {
        'tshirt-red-watch': {
            amazonId: 'B0XXXX1234',
            flipkartId: 'FLPKRT1234',
            keywords: 'kids t-shirt, red shirt, watch design, colorful tshirt for kids'
        },
        'tshirt-blue-watch': {
            amazonId: 'B0XXXX2345',
            flipkartId: 'FLPKRT2345',
            keywords: 'kids t-shirt, blue shirt, watch design, colorful tshirt for kids'
        },
        'bundle-creative': {
            amazonId: 'B0XXXX8765',
            flipkartId: 'FLPKRT8765',
            keywords: 'kids art bundle, creative kit, tshirt and sketchbook, art supplies for kids'
        },
        // Others would be added for all products
    };

    // Enhanced tracking for marketplace conversions
    const trackProductView = (productId) => {
        // In a real implementation, this would send data to analytics
        console.log(`Product viewed: ${productId}`);

        // This is where you would trigger events for remarketing
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                'event': 'product_view',
                'product_id': productId,
                'marketplace_amazon_id': marketplaceInfo[productId]?.amazonId || '',
                'marketplace_flipkart_id': marketplaceInfo[productId]?.flipkartId || '',
            });
        }
    };

    // Track product view when modal opens
    useEffect(() => {
        if (selectedProduct) {
            trackProductView(selectedProduct.id);
        }
    }, [selectedProduct]);

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container py-6 md:py-8 px-4">
                <div className="mb-4">
                    <Link href="/art" className="text-sm bg-white py-1 px-3 rounded-md hover:bg-gray-50 inline-flex items-center">
                        <span>← Back to Art Gallery</span>
                    </Link>
                </div>

                <div className="section bg-highlight mb-8">
                    {/* SEO-optimized Header Section */}
                    <div className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Adyant's Kids Collection</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-800 text-white py-1 px-3 rounded-md text-sm flex items-center">
                            <span className="text-yellow-400">★★★★★</span>
                            <span className="ml-1">4.9/5 from 24 reviews</span>
                        </span>
                        <span className="bg-green-700 text-white py-1 px-3 rounded-md text-sm flex items-center">
                            <span>✓</span>
                            <span className="ml-1">Free shipping over ₹999</span>
                        </span>
                    </div>
                    <p className="text-gray-700 mb-6 max-w-2xl">
                        Adyant's watch-inspired designs on premium quality products. From t-shirts to stationery,
                        each item features authentic children's art that sparks joy and creativity.
                    </p>
                </div>

                {/* Product Filter - Minimalist */}
                <div className="bg-white p-4 rounded-md shadow-sm mb-6 overflow-x-auto">
                    <div className="flex space-x-2">
                        {productCategories.map(category => (
                            <button
                                key={category.id}
                                className={`whitespace-nowrap px-4 py-2 rounded-md transition-colors ${activeCategory === category.id
                                    ? 'bg-kids-purple text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                    }`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid - Clean Design */}
                <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Adyant's Kids Collection</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300 flex flex-col"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="relative h-40 mb-3 overflow-hidden rounded-md bg-white flex items-center justify-center">
                                    <div className="text-5xl">{product.emoji || '👕'}</div>
                                </div>
                                <h3 className="text-lg font-bold mb-1 text-gray-900">{product.name}</h3>
                                <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-2">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                                    <button
                                        className="cta-primary px-3 py-1.5 rounded-md text-sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trust Elements - Simplified */}
                <section className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm mb-8">
                    <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 text-center">Why Parents & Kids Trust Us</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-3xl mb-2 text-kids-purple">🧸</div>
                            <h3 className="font-bold text-sm mb-1 text-gray-900">Kid-Approved</h3>
                            <p className="text-xs text-gray-700">Designed with input from kids</p>
                        </div>

                        <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-3xl mb-2 text-kids-green">♻️</div>
                            <h3 className="font-bold text-sm mb-1 text-gray-900">Eco-Friendly</h3>
                            <p className="text-xs text-gray-700">Sustainable materials</p>
                        </div>

                        <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-3xl mb-2 text-kids-blue">🛡️</div>
                            <h3 className="font-bold text-sm mb-1 text-gray-900">Safe Materials</h3>
                            <p className="text-xs text-gray-700">Tested for safety</p>
                        </div>

                        <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-3xl mb-2 text-kids-red">❤️</div>
                            <h3 className="font-bold text-sm mb-1 text-gray-900">Charitable</h3>
                            <p className="text-xs text-gray-700">50% supports education</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials - Clean Format */}
                <section className="bg-gray-800 text-white p-5 md:p-6 rounded-lg shadow-sm mb-8">
                    <h2 className="text-lg md:text-xl font-bold mb-4 text-center">What Families Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-700 p-4 rounded-md">
                            <div className="flex text-yellow-400 mb-2">
                                <span>★★★★★</span>
                            </div>
                            <p className="italic mb-2 text-sm">"My daughter loves her watch with colorful stick figures. She's proud it was designed by another kid!"</p>
                            <p className="text-xs font-bold">- Priya M., mother of two</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-md">
                            <div className="flex text-yellow-400 mb-2">
                                <span>★★★★★</span>
                            </div>
                            <p className="italic mb-2 text-sm">"These watches are perfect for teaching time. The designs are fun and the quality is impressive!"</p>
                            <p className="text-xs font-bold">- Rahul S., father</p>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="bg-gray-100 py-6 mt-8">
                <div className="container mx-auto text-center text-gray-600 text-sm">
                    <p>© 2025 Adyant's Creative World</p>
                </div>
            </footer>

            {/* Modal component - Clean & Minimal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-5 md:p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold text-gray-900">{selectedProduct.name}</h2>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-gray-500 hover:text-gray-900"
                                >
                                    <span className="text-2xl">×</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center mb-3">
                                        <div className="text-7xl">{selectedProduct.emoji || '👕'}</div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-700 mb-4 text-sm">{selectedProduct.description}</p>

                                    <div className="mb-4">
                                        <h3 className="font-bold text-gray-900 mb-2 text-sm">Select Size</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    className={`py-1.5 px-3 rounded text-sm border ${selectedSize === size
                                                        ? 'bg-kids-purple text-white border-kids-purple'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                                        }`}
                                                    onClick={() => setSelectedSize(size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h3 className="font-bold text-gray-900 mb-2 text-sm">Key Features</h3>
                                        <ul className="list-disc list-inside text-gray-700 text-sm">
                                            <li>Hand-drawn by Adyant (Age 8)</li>
                                            <li>Comfortable for daily wear</li>
                                            <li>Educational time-telling design</li>
                                            <li>Water-resistant construction</li>
                                        </ul>
                                    </div>

                                    <div className="flex items-center mb-4">
                                        <div className="text-xl font-bold text-gray-900 mr-4">₹{selectedProduct.price}</div>
                                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">In Stock</div>
                                    </div>

                                    <div className="flex items-center mb-4">
                                        <div className="flex text-yellow-500 mr-2">
                                            <span>★★★★★</span>
                                        </div>
                                        <span className="text-gray-700 text-xs">(45 reviews)</span>
                                    </div>

                                    <MarketplaceLinks
                                        amazonId={selectedProduct.marketplaceIds?.amazon}
                                        flipkartId={selectedProduct.marketplaceIds?.flipkart}
                                        productName={selectedProduct.name}
                                    />

                                    <div className="flex space-x-3 mt-4">
                                        <button
                                            className="cta-primary py-2 px-4 rounded-md flex-grow text-sm"
                                            onClick={() => {
                                                addToCart(selectedProduct);
                                                setSelectedProduct(null);
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                        <button className="cta-secondary py-2 px-4 rounded-md text-sm">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <ProductRecommendation currentProduct={selectedProduct} products={products} />
                        </div>
                    </div>
                </div>
            )}

            {/* Added to Cart Toast - Minimal */}
            {showAddedMessage && (
                <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in">
                    <div className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Added to cart!</span>
                    </div>
                </div>
            )}
        </div>
    );
} 