
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string, size?: string) => void;
  updateQuantity: (itemId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (i) => i.id === item.id && i.size === item.size
          );
          
          if (existingItemIndex > -1) {
            // Item already exists, update quantity
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += item.quantity;
            return { items: updatedItems };
          }
          
          // Item doesn't exist, add new item
          return { items: [...state.items, item] };
        });
      },
      
      removeItem: (itemId, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === itemId && (!size || item.size === size))
          ),
        }));
      },
      
      updateQuantity: (itemId, quantity, size) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === itemId && (!size || item.size === size)) {
              return { ...item, quantity };
            }
            return item;
          }),
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      totalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
