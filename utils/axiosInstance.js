import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true, // so cookies (access/refresh token) are sent
});

