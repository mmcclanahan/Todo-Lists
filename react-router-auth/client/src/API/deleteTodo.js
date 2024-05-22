import axios from 'axios';
import { API_URL, token } from './config';

export default async (id) => {
  return axios.delete(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}