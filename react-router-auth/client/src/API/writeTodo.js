import axios from 'axios';
import { API_URL, token } from './config';

export default async (text) => {
  const response = await axios.post(`${API_URL}/todos`, {text: text}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return response.data;
}