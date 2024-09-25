// stores/cartStore.js
import { create } from 'zustand';

// Helper function to get cart from localStorage
const getLocalStorageCart = () => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

// Zustand store for the cart
export const useCartStore = create((set) => ({
  cart: getLocalStorageCart(), // Initialize from localStorage if available
  addItem: (item) => set((state) => {
    const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = state.cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...state.cart, { ...item, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    return { cart: updatedCart };
  }),
  removeItem: (itemId) => set((state) => {
    const updatedCart = state.cart.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    return { cart: updatedCart };
  }),
  updateQuantity: (itemId, quantity) => set((state) => {
    const updatedCart = state.cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    return { cart: updatedCart };
  }),
  clearCart: () => set(() => {
    localStorage.removeItem('cart'); // Clear from localStorage
    return { cart: [] };
  }),
}));
