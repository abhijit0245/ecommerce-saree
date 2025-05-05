import axios from 'axios';

export const API_URL = "http://localhost:5454";
export const DEPLOYED_URL = "https://7b5c-2406-7400-70-ed22-501-65d2-2eb5-15fc.ngrok-free.app/"
// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});