import axios, { AxiosRequestConfig } from "axios";
import type { AxiosInstance } from "axios";
import LocalCache from '@/utils/cache'
import { BASE_URL, TIME_OUT } from "./config";

class MyHttp {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
    });
    this.instance.interceptors.request.use((config) => {
      const token = LocalCache.getCache('token')
      if (token) {
        config.headers.Authorization = token
      }
      return config
    }, (err) => {
      return err
    })
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  request(config: AxiosRequestConfig): Promise<any> {
    return this.instance.request(config);
  }

  get(config: AxiosRequestConfig): Promise<any> {
    return this.instance.request({ ...config, method: "GET" });
  }

  post(config: AxiosRequestConfig): Promise<any> {
    return this.instance.request({ ...config, method: "POST" });
  }
}

export default new MyHttp()
