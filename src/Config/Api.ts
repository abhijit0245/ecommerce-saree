import axios from 'axios';

// Localhost (for development)
// export const API_URL = "http://localhost:5454";

// Render (for deployed backend)
// export const API_URL = "https://zosh-bazzar-backend.onrender.com";

// Ngrok (for demo or temporary public access)
export const API_URL = "https://59d0-2406-7400-70-ed22-501-65d2-2eb5-15fc.ngrok-free.app";

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});
