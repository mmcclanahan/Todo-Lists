import axios from 'axios';
const API_URL = 'http://localhost:8080'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNTk4MTQxNH0.pTx3mRPm6OU8VTB7lskVHYaO9cC0X1ck9dJ0SoFkIek';

export default async (text) => {
  const response = await axios.post(`${API_URL}/todos`, {text: text}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return response.data;
}