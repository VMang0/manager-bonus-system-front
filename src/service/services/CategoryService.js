import $api from '../http';

export default class CategoryService {
  static async fetchCategories() {
    try {
      const response = await $api.get(`/category/all`);
      return response.data;
    } catch (e) {
      return e;
    }
  }
}
