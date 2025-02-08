import axios from "axios";
import { setCookie } from "cookies-next";
// process.env.BASE_URL
const AxiosInstance = axios.create({
    baseURL: 'https://keyhantex.ir/drzosha'
});
AxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status == 401) {
            setCookie("authToken", "", { maxAge: -1 });
        }
        // whatever you want to do with the error
        return Promise.reject(error);
    });

export default AxiosInstance;