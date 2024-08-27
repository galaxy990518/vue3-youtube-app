import axios from 'axios';

const fetcher = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' }
});

export default fetcher;
