import axios, {AxiosInstance} from "axios";

const clienthttp: AxiosInstance = axios.create({
   baseURL: "http://localhost:8089/"
})
export default clienthttp