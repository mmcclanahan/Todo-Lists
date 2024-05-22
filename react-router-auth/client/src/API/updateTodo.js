import axios from 'axios';
import { API_URL, token } from './config';

export default async ({id, text, completed}) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, {text, completed}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return response.data;
}