import $api from '../http';
import { create } from 'zustand';

export const usePriorityStore = create((set) => ({
  priorities: [],
  isLoading: false,
  fetchPriorities: async () => {
    try {
      set({ isLoading: true });
      const response = await $api.get(`/priority/all`);
      set({ priorities: response.data });
    } catch (e) {
      throw e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
}));
