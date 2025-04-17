"use client";

import { useState } from 'react';

export default function MarketplaceLinks({ productId, marketplaceInfo }) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!marketplaceInfo || !marketplaceInfo[productId]) {
        return null;
    }

    const { amazonId, flipkartId } = marketplaceInfo[productId];

    // These would be actual URLs in production
    const amazonUrl = `https://www.amazon.in/dp/${amazonId}`;
    const flipkartUrl = `https://www.flipkart.com/p/${flipkartId}`;

    const trackMarketplaceClick = (marketplace) => {
        // In a real implementation, this would send data to analytics
        console.log(`Marketplace click: ${marketplace} for product ${productId}`);

        // This is where you would trigger events for conversion tracking
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                'event': 'marketplace_click',
                'marketplace': marketplace,
                'product_id': productId,
            });
        }
    };

    return (
        <div className="mt-6">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between w-full bg-white bg-opacity-10 p-3 rounded-lg text-sm hover:bg-opacity-20 transition-all"
            >
                <span className="flex items-center">
                    <span className="mr-2">🛍️</span>
                    Also available on marketplaces
                </span>
                <span>{isExpanded ? '−' : '+'}</span>
            </button>

            {isExpanded && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                    <a
                        href={amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackMarketplaceClick('amazon')}
                        className="flex items-center justify-center bg-[#232F3E] text-white p-3 rounded-lg hover:opacity-90 transition-all"
                    >
                        <span className="mr-2">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.886-1.301 1.429-2.186 1.429-1.214 0-1.922-.927-1.922-2.321 0-2.726 2.442-3.223 4.699-3.223v.764zm3.186 7.705c-.26.238-.634.403-1.058.403-.441 0-.861-.166-1.226-.591-1.121-1.265-1.301-3.708-1.301-5.649v-.957c0-3.56.591-5.649 3.707-5.649 1.504 0 2.649.927 2.649 3.223v2.729h-2.649v-.403c0-1.18.148-2.255-1.429-2.255-1.504 0-1.504 1.798-1.504 2.858v2.107c0 1.121-.148 2.017.475 2.858.261.339.634.593 1.058.593.441 0 .841-.166 1.121-.441l.157-.166z" />
                                <path d="M21.678 21.614c-8.148 3.783-15.511.976-19.543-2.799-.383-.37-.043-.889.408-.622 5.036 2.914 11.355 3.554 17.711.89.792-.328 1.468.517.663 1.104-.74.536-1.572.987-2.224 1.427h-.005z" />
                                <path d="M22.789 19.894c-.236-.295-.909-.267-1.394-.134-.483.134-1.188.392-1.295.826-.129.516.39.546.736.396.346-.152 1.02-.5 1.339-.671.319-.172.85-.053.614.241-.236.295-.909.267-1.339.098-.43-.17-.736-.223-.898-.152-.162.071-.218.241-.56.384 0 0 .005-.005.005-.005.547.241 1.027.152 1.339-.044.313-.197.683-.558.451-.938z" />
                            </svg>
                        </span>
                        Buy on Amazon
                    </a>

                    <a
                        href={flipkartUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackMarketplaceClick('flipkart')}
                        className="flex items-center justify-center bg-[#2874F0] text-white p-3 rounded-lg hover:opacity-90 transition-all"
                    >
                        <span className="mr-2">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.82 2.24v9.88c0 .45-.37.82-.82.82s-.82-.37-.82-.82V2.24c0-.45.37-.82.82-.82s.82.37.82.82z" />
                                <path d="M6.82 7.22H4c-.45 0-.82-.37-.82-.82s.37-.82.82-.82h2.82c.45 0 .82.37.82.82s-.37.82-.82.82z" />
                                <path d="M15 22c-1.3 0-3.63-.68-3.63-3.38V2.24c0-.45.37-.82.82-.82s.82.37.82.82v16.38c0 1.26.72 1.74 2 1.74 1.61 0 1.9-1.74 1.9-1.74v-8c0-.45.37-.82.82-.82s.82.37.82.82v8C18.55 20.77 16.73 22 15 22z" />
                                <path d="M19.18 9.41h-3.25c-.45 0-.82-.37-.82-.82s.37-.82.82-.82h3.25c.45 0 .82.37.82.82s-.37.82-.82.82z" />
                            </svg>
                        </span>
                        Buy on Flipkart
                    </a>
                </div>
            )}
        </div>
    );
} 