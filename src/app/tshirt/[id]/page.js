import React from 'react';
import products from '../../../data/products';
import ProductDetails from '../../../components/ProductDetails';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default function ProductPage({ params }) {
    const product = products.find((p) => p.id.toString() === params.id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-gray-600">Product not found</h1>
            </div>
        );
    }

    return <ProductDetails product={product} />;
} 