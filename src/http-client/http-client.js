import axios from 'axios';
import {BASE_URL, AUTH_TOKEN} from '~/core/env';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const fetchCities = async () => await get('/cities/weather');

// HTTP verbs
const get = (url) => client.get(url).then((response) => response);

// REQUEST INTERCEPTOR
client.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = AUTH_TOKEN;
    return config;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  },
);

// RESPONSE INTERCEPTOR
client.interceptors.response.use(
  ({data: {data}}) => data,

  (err) => {
    console.error(err.message);
    return Promise.reject(err);
  },
);
