import $api from '../http';

const URL_COMPANY = '/company';
export default class CompanyService {
  static async add() {
    return $api.post(`${URL_COMPANY}/add`);
  }

  static async fetchCompanies() {
    return $api.get(`${URL_COMPANY}/all`);
  }
}
