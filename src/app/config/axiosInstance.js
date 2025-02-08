import axios from "axios";
// process.env.BASE_URL
const AxiosInstance = axios.create({
    baseURL: 'https://keyhantex.ir/drzosha'
});

export default AxiosInstance;