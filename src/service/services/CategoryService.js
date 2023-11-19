import $api from '../http';
import { create } from 'zustand';

export const useCategoryStore = create((set) => ({
  categories: [],
  isLoading: false,
  fetchCategories: async () => {
    try {
      set({ isLoading: true });
      const response = await $api.get(`/category/all`);
      set({ categories: response.data });
    } catch (e) {
      throw e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
}));
