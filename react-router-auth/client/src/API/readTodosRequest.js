const API_URL = 'http://localhost:8080'
import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNTk4MTQxNH0.pTx3mRPm6OU8VTB7lskVHYaO9cC0X1ck9dJ0SoFkIek';

export default async () => {
  const response = await axios.get(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return response.data;
}