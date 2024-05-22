import axios from 'axios';
import { API_URL, token } from './config';

export default async () => {
  const response = await axios.get(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return response.data;
}