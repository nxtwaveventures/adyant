"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    // Load cart from localStorage on initial render
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('adyant_cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error('Failed to load cart from localStorage:', error);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('adyant_cart', JSON.stringify(cart));
        } catch (error) {
            console.error('Failed to save cart to localStorage:', error);
        }
    }, [cart]);

    // Add item to cart
    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item =>
                item.id === product.id &&
                item.size === product.size &&
                item.color === product.color
            );

            if (existingItem) {
                // Update quantity if item already in cart
                return prevCart.map(item =>
                    item.id === product.id &&
                        item.size === product.size &&
                        item.color === product.color
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                // Add new item to cart
                return [...prevCart, product];
            }
        });
        setCartOpen(true);
    };

    // Remove item from cart
    const removeFromCart = (index) => {
        setCart(prevCart => prevCart.filter((_, i) => i !== index));
    };

    // Update item quantity
    const updateQuantity = (index, newQuantity) => {
        if (newQuantity < 1) return;

        setCart(prevCart =>
            prevCart.map((item, i) =>
                i === index ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Clear cart
    const clearCart = () => {
        setCart([]);
    };

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Calculate total items in cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                cartOpen,
                setCartOpen,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalPrice,
                totalItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export default CartContext; 