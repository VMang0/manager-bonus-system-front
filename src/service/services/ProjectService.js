import $api from '../http';
import { create } from 'zustand';

export const useProjectStore = create((set) => ({
  projects: [],
  isLoading: false,
  fetchProjects: async () => {
    try {
      set({ isLoading: true });
      const response = await $api.get(`/project/all`);
      set({ projects: response.data });
    } catch (e) {
      throw e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
  createProject: async (project) => {
    try {
      set({ isLoading: true });
      const response = await $api.post(`/project/add`, project);
      set((state) => ({
        projects: [...state.projects, response.data],
      }));
    } catch (e) {
      throw e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
}));
