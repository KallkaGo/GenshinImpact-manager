import axios, { AxiosRequestConfig } from "axios";
import type { AxiosInstance } from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class MyHttp {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
    });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config: AxiosRequestConfig):Promise<any> {
    return this.instance.request(config);
  }

  get(config: AxiosRequestConfig):Promise<any> {
    return this.instance.request({ ...config, method: "GET" });
  }

  post(config: AxiosRequestConfig):Promise<any> {
    return this.instance.request({ ...config, method: "POST" });
  }
}

export default new MyHttp()
