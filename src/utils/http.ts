import axios, { AxiosRequestConfig } from 'axios'

const defaultConfig = {
    timeout: 5000,
    baseUrl: ''
}

class Http {
    constructor() {
        this.httpInterceptorsRequest()
        this.httpInterceptorsResponse()
    }

    // 定义私有方法和属性
    private static axiosInstance = axios.create(defaultConfig)

    // 请求拦截器
    private httpInterceptorsRequest() {
        Http.axiosInstance.interceptors.request.use(config => {
            return config
        }, err => {
            return Promise.reject(err)
        })
    }

    private httpInterceptorsResponse() {
        Http.axiosInstance.interceptors.response.use(config => {
            return config
        }, err => {
            return Promise.reject(err)
        })
    }

    // 对外暴露的方法
    public httpRequestGet<T>(url:string, params: AxiosRequestConfig) : Promise<T> {
        return Http.axiosInstance.get(url, params).then(res => res.data).catch()
    }

    public httpRequestPost<T>(url:string, params: AxiosRequestConfig) : Promise<T> {
        return Http.axiosInstance.get(url, params).then(res => res.data).catch()
    }
}

export const http = new Http()