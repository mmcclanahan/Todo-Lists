import axios from 'axios';
const API_URL = 'http://localhost:8080'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNTk4MTQxNH0.pTx3mRPm6OU8VTB7lskVHYaO9cC0X1ck9dJ0SoFkIek';

export default async (id) => {
  return axios.delete(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}