import axios from "axios";

const apiUrl = import.meta.env.VITE_PUBLIC_API_URL;
console.log(apiUrl,'apiUrl')
export const axiosInstance = axios.create({
    baseURL: apiUrl
});

axiosInstance.interceptors.request.use(
    async (config) => {
        // const { jwtToken } = useAuthStore.getState();

        // if (jwtToken) {
        // ${jwtToken}
            config.headers.Authorization = `Bearer `;
            config.headers.Accept = config.headers['Accept'] ?? 'application/json';
        // }

        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);