import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
export default instance;
