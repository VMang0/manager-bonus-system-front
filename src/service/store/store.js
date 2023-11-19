import { create } from 'zustand';
import $api, { API_URL } from '../http';
import axios from 'axios';

export const useAuthStore = create((set) => ({
  user: {},
  isAuth: false,
  isLoading: false,
  async login(userData) {
    set({ isLoading: true });
    try {
      const response = await $api.post('/login', userData);
      localStorage.setItem('token', response.data.accessToken);
      set({ isAuth: true });
      set({ user: response.data.user });
    } catch (e) {
      throw e.response?.data.message;
    } finally {
      set({ isLoading: false });
    }
  },
  async registration(userData) {
    set({ isLoading: true });
    try {
      const result = await $api.post('/registration', userData);
      return result;
    } catch (e) {
      throw e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
  async checkAuth() {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);
      set({ isAuth: true });
      set({ user: response.data.user });
    } catch (e) {
      return e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
}));
