import axios from 'axios'
import api from "@/config";

axios.defaults.crossDomain=true

// 创建一个 axios 实例
const http = axios.create({
    baseURL: '/api', // 所有的请求地址前缀部分
    timeout: 60000, // 请求超时时间毫秒
    withCredentials: false, // 异步请求携带cookie
    headers: {
        // 设置后端需要的传参类型
        'Content-Type': 'application/json',
        'token': localStorage.getItem("token"),
    },
})

// 添加请求拦截器
http.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config
    },
    function (error) {
        // 对请求错误做些什么
        console.log(error)
        return Promise.reject(error)
    }
)

// 添加响应拦截器
http.interceptors.response.use(
    function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        const data = response.data
        const lastSetTime = localStorage.getItem("tokenSetTime")
        if (new Date().getTime() - parseInt(lastSetTime) > 20*60*1000) {
            http.get(api.serverHost+"/api/user/refreshToken")
                .then(resp=>{
                    if (resp.data.success){
                        localStorage.setItem("token",resp.data.obj)
                        localStorage.setItem("tokenSetTime",new Date().getTime().toString())
                    }else {
                        localStorage.clear()
                    }
                })
        }

        if (data.success){
            return data
        }else {
            alert(data.message)
        }
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        console.log(error)
        return Promise.reject(error)
    }
)
export default http