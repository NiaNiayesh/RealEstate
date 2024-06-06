import axios from 'axios';
import Cookies from "js-cookie";

const BASE_URL = 'https://api-shop-new.liara.run';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token") 
    //localStorage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refresh_token")
      //localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const response = await axios.post(`${BASE_URL}/account/api/token/refresh/`, { refresh: refreshToken });
          const { access } = response.data;
          Cookies.set('access_token', access,{ expires: 7, secure: true })
          //localStorage.setItem('access_token', access);
          originalRequest.headers.Authorization = `Bearer ${access}`;
          return axios(originalRequest);
        } catch (err) {
          console.log('Token refresh failed:', err);
         
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
