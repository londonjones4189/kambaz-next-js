import axios from "axios";
const axiosWithCredentials = axios.create({ 
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  }
});
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
