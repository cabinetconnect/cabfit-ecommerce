"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { CartLine } from "@/types/cart";

type AddCartItem = Omit<CartLine, "key" | "quantity"> & {
  quantity?: number;
};

type CartState = {
  items: CartLine[];
  isCartOpen: boolean;
  addItem: (item: AddCartItem) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

function lineKey(productId: string, variantId: string) {
  return `${productId}:${variantId}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isCartOpen: false,
      addItem: (item) =>
        set((state) => {
          const quantity = Math.max(1, item.quantity ?? 1);
          const key = lineKey(item.productId, item.variantId);
          const existing = state.items.find((line) => line.key === key);

          if (existing) {
            return {
              items: state.items.map((line) =>
                line.key === key
                  ? { ...line, quantity: line.quantity + quantity }
                  : line
              )
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...item,
                key,
                quantity
              }
            ]
          };
        }),
      removeItem: (key) =>
        set((state) => ({
          items: state.items.filter((line) => line.key !== key)
        })),
      updateQuantity: (key, quantity) =>
        set((state) => ({
          items:
            quantity < 1
              ? state.items.filter((line) => line.key !== key)
              : state.items.map((line) =>
                  line.key === key ? { ...line, quantity } : line
                )
        })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen }))
    }),
    {
      name: "cabfit-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items })
    }
  )
);

export function getCartCount(items: CartLine[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function getCartSubtotal(items: CartLine[]) {
  return items.reduce(
    (total, item) => total + item.priceCents * item.quantity,
    0
  );
}
