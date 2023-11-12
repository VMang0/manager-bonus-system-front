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

  static async verification(userInfo) {
    try {
      const response = await $api.post(`/user/verify`, userInfo);
      return response;
    } catch (e) {
      throw e.response?.data?.message;
    }
  }
}
