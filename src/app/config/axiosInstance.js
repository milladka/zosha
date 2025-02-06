import axios from "axios";
// process.env.BASE_URL
const AxiosInstance = axios.create({
    baseURL: 'http://drzosha.local'
});

export default AxiosInstance;