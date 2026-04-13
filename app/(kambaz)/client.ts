import axios from "axios";
const axiosWithCredentials = axios.create({ 
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  }
});

export const USERS_API = `/api/users`;