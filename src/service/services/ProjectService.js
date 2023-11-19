import $api from '../http';
import { create } from 'zustand';

export const useProjectStore = create((set) => ({
  projects: [],
  isLoading: false,
  teamIds: [],
  team: [],
  allTeams: [],
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
  fetchUsersProjects: async (id) => {
    try {
      set({ isLoading: true });
      const response = await $api.get(`/project/user/${id}`);
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
  updateProject: async (updatedProject) => {
    try {
      set({ isLoading: true });
      const response = await $api.post(`/project/update`, updatedProject);
      set((state) => {
        const updatedProjects = state.projects.map((project) => {
          return project._id === updatedProject._id ? response.data : project;
        });
        return { projects: updatedProjects };
      });
    } catch (e) {
      throw e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
  deleteProject: async (id) => {
    try {
      set({ isLoading: true });
      await $api.delete(`/project/delete/${id}`);
      set((state) => {
        const updatedProjects = state.projects.filter(
          (project) => project._id !== id,
        );
        return { projects: updatedProjects };
      });
    } catch (e) {
      throw e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
  fetchProjectTeam: (project) => {
    set((state) => {
      const projectsTeam = state.allTeams.find((item) => item._id === project);
      const projectTeam = projectsTeam.team.map((item) => item._id);
      return { team: projectsTeam.team, teamIds: projectTeam };
    });
  },
  setProjectTeam: (teamIds) => {
    set({ teamIds });
  },
  fetchAllProjectsTeams: async () => {
    try {
      set({ isLoading: true });
      const response = await $api.get(`project/team`);
      set({ allTeams: response.data });
    } catch (e) {
      throw e.response?.data?.message;
    } finally {
      set({ isLoading: false });
    }
  },
}));
