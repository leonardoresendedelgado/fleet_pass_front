import axios, {AxiosInstance} from "axios";

const clienthttp: AxiosInstance = axios.create({
   baseURL: "http://localhost:3051/"
})
export default clienthttp