'use client';

import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 bg-gradient-primary-vertical p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={product.vectorImage || product.image}
                        alt={product.name}
                        className="max-w-[200px] max-h-[200px] object-contain"
                    />
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">${product.price}</span>
                    <Link href={`/tshirts/${product.slug}`} className="btn btn-outline">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 