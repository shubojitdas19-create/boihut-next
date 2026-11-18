"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Book } from "@/lib/data";
import { parsePrice } from "@/lib/utils";

type CartItem = Book & { quantity: number; cartItemId: string; format: string };

interface CartContextType {
  cart: CartItem[];
  addToCart: (book: Book, quantity: number, format: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("boihut-cart");
    if (saved) setCart(JSON.parse(saved));
    setIsLoaded(true);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isLoaded) localStorage.setItem("boihut-cart", JSON.stringify(cart));
  }, [cart, isLoaded]);

  const addToCart = (book: Book, quantity: number, format: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === book.id && item.format === format);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === existing.cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...book, quantity, format, cartItemId: `${book.id}-${format}-${Date.now()}` }];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) => prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity } : item)));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => {
    return total + parsePrice(item.price) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};