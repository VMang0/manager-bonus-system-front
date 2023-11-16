import $api from '../http';

export default class PriorityService {
  static async fetchPriority() {
    try {
      const response = await $api.get(`/priority/all`);
      return response.data;
    } catch (e) {
      return e;
    }
  }
}
