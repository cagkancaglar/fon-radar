import axios from 'axios';

export default class CustomerService {
  getCustomer() {
    return axios.get('https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers');
  }
  async addCustomer(data) {
    return await axios.post('https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers' , data);
  }
  async updateCustomer(id, data) {
    return await axios.put('https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers/' + id, data);
  }
  async deleteCustomer(id) {
    return await axios.delete('https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers/' + id);
  }
  async getByCustomerId(id) {
    return await axios.get('https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers/' + id);
  }
}
