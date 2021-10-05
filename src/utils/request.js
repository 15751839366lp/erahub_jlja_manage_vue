import axios from 'axios'
import {ElMessage} from 'element-plus';
import {getToken} from '../utils/auth'

//创建axios的一个实例
var service = axios.create({
    baseURL: process.env.NODE_ENV==='production' ? process.env.VUE_APP_API_URL : "/api",//接口统一域名
    timeout: 6000, //设置超时
})

//请求拦截器
service.interceptors.request.use((config) => {

    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    config.headers.Authorization = getToken();
    // if (token){
    //     LocalStorage.set(LOCAL_KEY_XINGUAN_ACCESS_TOKEN,)
    // }
    //若请求方式为post，则将data参数转为JSON字符串
    // config.data = JSON.stringify(config.data);
    // config.params = JSON.stringify(config.params);
    return config;
}, (error) =>{
    // 对请求错误做些什么
    return Promise.reject(error);
})


//响应拦截器
service.interceptors.response.use((response) => {

    if(response.data.data != null && response.data.data.errorMsg != null && response.data.data.errorMsg != undefined && response.data.data.errorMsg == "用户未认证"){
        window.localStorage.clear();
        window.sessionStorage.clear();
    }
    //响应成功
    return response;
}, (error) => {
    console.log(error)
    //响应错误
    if (error.response && error.response.status) {
        const status = error.response.status
        let message = error.response.data.message;
        if(message == undefined || message == null || message == ""){
            switch (status) {
                case 400:
                    message = '用户名或密码错误';
                    break;
                case 401:
                    message = '请求错误';
                    break;
                case 404:
                    message = '请求地址出错';
                    break;
                case 408:
                    message = '请求超时';
                    break;
                case 500:
                    message = '服务器内部错误!';
                    break;
                case 501:
                    message = '服务未实现!';
                    break;
                case 502:
                    message = '网关错误!';
                    break;
                case 503:
                    message = '服务不可用!';
                    break;
                case 504:
                    message = '网关超时!';
                    break;
                case 505:
                    message = 'HTTP版本不受支持';
                    break;
                default:
                    message = '请求失败'
            }
        }
        ElMessage.error(message);
        return Promise.reject(error);
    }
    return Promise.reject(error);
});


export default service;
