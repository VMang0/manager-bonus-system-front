import $api from '../http';

export default class UserService {
  static fetchUsers() {
    return $api.get('/users');
  }

  static async fetchUsersForActivate(company) {
    try {
      const response = await $api.get(`/users/activate/${company}`);
      return response.data;
    } catch (e) {
      return e;
    }
  }

  static async addManager(email, company) {
    try {
      const response = await $api.post(`/add/manager`, { email, company });
      return response;
    } catch (e) {
      throw e.response?.data?.message;
    }
  }
  static async verification(userInfo) {
    try {
      const response = await $api.post(`/user/verify`, userInfo);
      return response;
    } catch (e) {
      throw e.response?.data?.message;
    }
  }
  static async verifyManager(link, email, password, company) {
    try {
      const response = await $api.post(`/manager/verify`, {
        link,
        email,
        password,
        company,
      });
      return response;
    } catch (e) {
      throw e.response?.data?.message;
    }
  }

  static async getInfoAboutUser(id) {
    try {
      const response = await $api.get(`/user/${id}`);
      return response.data;
    } catch (e) {
      throw e.response?.data?.message;
    }
  }

  static async fetchManagers() {
    try {
      const response = await $api.get(`/manager/all`);
      return response.data;
    } catch (e) {
      throw e.response?.data?.message;
    }
  }
}
