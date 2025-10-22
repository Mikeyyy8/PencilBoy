import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  // fetch all products
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await fetch('http://localhost:5000/products');
      const data = await res.json();
      set({ products: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // search products
  searchProducts: async (query) => {
    if (!query) return;
    set({ loading: true });
    try {
      const res = await fetch(`http://localhost:5000/products/search?q=${query}`);
      const data = await res.json();
      set({ products: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
