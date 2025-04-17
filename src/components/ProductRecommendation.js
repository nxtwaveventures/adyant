"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// This component implements various psychological principles to encourage purchases:
// 1. Social proof - showing what others are buying
// 2. Scarcity - limited time offers
// 3. Authority - expert recommendations
// 4. Reciprocity - free items with purchase
// 5. Consistency - matching with previous purchases

export default function ProductRecommendation({
    currentProduct,
    allProducts,
    onProductSelect
}) {
    const [recommendations, setRecommendations] = useState([]);
    const [showScarcityAlert, setShowScarcityAlert] = useState(false);

    // Generate appropriate recommendations based on current product
    useEffect(() => {
        if (!currentProduct || !allProducts) return;

        // Different recommendation strategies based on product type
        let recommended = [];

        if (currentProduct.type === 'T-shirt') {
            // Complementary products (accessories)
            recommended = allProducts.filter(p =>
                (p.type === 'Tote Bag' || p.type === 'Stickers') &&
                p.id !== currentProduct.id
            ).slice(0, 2);

            // Add a bundle as an upsell option
            const bundle = allProducts.find(p => p.type === 'Bundle');
            if (bundle) recommended.push(bundle);

        } else if (currentProduct.type === 'Bundle') {
            // For bundles, recommend individual items not in the bundle
            recommended = allProducts.filter(p =>
                p.type !== 'Bundle' &&
                !['Tote Bag', 'Stationery', 'Stickers'].includes(p.type)
            ).slice(0, 3);

        } else {
            // For accessories, recommend t-shirts and bundles
            const shirt = allProducts.find(p => p.type === 'T-shirt');
            const bundle = allProducts.find(p => p.type === 'Bundle');

            if (shirt) recommended.push(shirt);
            if (bundle) recommended.push(bundle);

            // Add one more accessory
            const otherAccessory = allProducts.find(p =>
                p.type !== 'Bundle' &&
                p.type !== 'T-shirt' &&
                p.id !== currentProduct.id
            );
            if (otherAccessory) recommended.push(otherAccessory);
        }

        setRecommendations(recommended.slice(0, 3));

        // Show scarcity alert after a delay (psychological trigger)
        const timer = setTimeout(() => {
            setShowScarcityAlert(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentProduct, allProducts]);

    if (!currentProduct || recommendations.length === 0) return null;

    return (
        <div className="mt-8 pt-6 border-t border-white border-opacity-30">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Complete the Look</h3>

                {/* Psychological trigger - Limited time offer */}
                {showScarcityAlert && (
                    <div className="bg-kids-orange text-white text-xs py-1 px-3 rounded-full pulse-animation">
                        <span className="mr-1">🔥</span> Limited time offer - Buy 2, Get 10% Off!
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {recommendations.map(product => (
                    <div
                        key={product.id}
                        className="bg-white bg-opacity-20 rounded-lg p-3 cursor-pointer hover:bg-opacity-30 transition-all flex flex-col"
                        onClick={() => onProductSelect(product)}
                    >
                        <div className="flex items-center mb-2">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-2">
                                <span className="text-lg">
                                    {product.type === 'T-shirt' ? '👕' :
                                        product.type === 'Tote Bag' ? '👜' :
                                            product.type === 'Stationery' ? '📓' :
                                                product.type === 'Stickers' ? '🏷️' :
                                                    product.type === 'Accessories' ? '🎭' : '🎁'}
                                </span>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">{product.name}</p>
                                <p className="text-xs">₹{product.price}</p>
                            </div>
                        </div>

                        {/* Psychological triggers - Social proof */}
                        <div className="mt-auto">
                            {product.type === 'T-shirt' && (
                                <div className="text-xs flex items-center">
                                    <span className="mr-1">👧👦</span> Popular with kids ages 5-8
                                </div>
                            )}
                            {product.type === 'Bundle' && (
                                <div className="text-xs flex items-center">
                                    <span className="mr-1">💰</span> Best value - Save ₹150
                                </div>
                            )}
                            {product.type === 'Tote Bag' && (
                                <div className="text-xs flex items-center">
                                    <span className="mr-1">👩‍👦</span> Parent favorite
                                </div>
                            )}
                            {(product.type === 'Stickers' || product.type === 'Accessories') && (
                                <div className="text-xs flex items-center">
                                    <span className="mr-1">🎁</span> Perfect add-on gift
                                </div>
                            )}
                        </div>

                        <button className="mt-2 w-full bg-kids-purple bg-opacity-70 hover:bg-opacity-100 text-white py-1 rounded text-xs transition-all">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Psychological triggers - Authority & reciprocity */}
            <div className="bg-white bg-opacity-10 p-3 rounded-lg flex items-start text-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-kids-blue rounded-full flex items-center justify-center mr-3 mt-1">
                    <span>💡</span>
                </div>
                <div>
                    <p className="font-semibold mb-1">Stylist Recommendation</p>
                    <p>Items that match the {currentProduct.name} are perfect for school,
                        creative play and everyday adventures. Plus, get a <span className="font-semibold">free coloring sheet</span> when
                        you purchase any two items!</p>
                </div>
            </div>
        </div>
    );
} 