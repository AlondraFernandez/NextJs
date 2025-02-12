"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    // ✅ Cargar carrito desde localStorage al iniciar
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // ✅ Guardar carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (product) => {
        console.log("🚀 Agregando producto al carrito:", product);

        // Verificar si el producto ya está en el carrito
        const existingProduct = cart.find(p => p.id === product.id);

        if (existingProduct) {
            // Si ya está, actualiza la cantidad
            const updatedCart = cart.map(p =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            );
            setCart(updatedCart);
        } else {
            // Si no está, lo agrega con cantidad 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter(p => p.id !== productId);
        setCart(updatedCart);
    };

    const handleClearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart, handleClearCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
