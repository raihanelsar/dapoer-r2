import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string; // Gabungan productId + variantName supaya unik
  productId: string;
  name: string;
  image: string;
  variant: string;
  price: number;
  qty: number;
  poDate: string;
  delivery: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addToCart: (newItem) =>
        set((state) => {
          // Cek apakah produk dengan varian yang sama sudah ada di keranjang
          const existingItem = state.items.find(
            (item) => item.id === newItem.id,
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id
                  ? { ...item, qty: item.qty + newItem.qty }
                  : item,
              ),
            };
          }
          // Kalau belum ada, tambahkan sebagai item baru
          return { items: [...state.items, newItem] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, qty) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, qty } : item,
          ),
        })),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "dapoer-r2-cart", // Nama key penyimpanannya di localStorage browser
    },
  ),
);
