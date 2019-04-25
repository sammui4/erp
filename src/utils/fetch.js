import axios from "axios";
import router from '@/router';
import { getToken } from '@/utils/token';

let baseurl = "";
let bus_baseurl = "";

switch (process.env.NODE_ENV) {
    case "production":
        baseurl = "http://192.168.9.68:8080/data-web/";
        bus_baseurl = "http://192.168.9.68:8080/tq-erp-web/";
        baseurl = "http://192.168.9.55/data-web/";
        bus_baseurl = "http://192.168.9.55/tq-erp-web/";
        // baseurl = "http://192.168.9.13:8080/data-web/";
        break;
    case "development":
        baseurl = "http://192.168.9.16:8080/data-web/";
        bus_baseurl = "http://192.168.9.16:8081/tq-erp-web/";
        baseurl = "http://localhost:3000/data-web/";
        bus_baseurl = "http://localhost:3000/tq-erp-web/";
        // 铭坚
        // baseurl = "http://192.168.9.119:8180/data-web/";
        // bus_baseurl = "http://192.168.9.119:8280/tq-erp-web/";

        // 杨泉
        // baseurl = "http://192.168.9.112:8080/data-web/";
        // bus_baseurl = "http://192.168.9.112:8081/tq-erp-web/";
    break;
}

const instance = axios.create({
    headers: {

    },
    timeout: 60000,
    baseURL: baseurl
});

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
instance.interceptors.request.use((config) => {  //配置发送请求的信息

    config.headers = config.headers || {};

    config.headers.token = getToken();

    return config;
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
    let responseData = response.data;

    // 如果token失效 跳到登录页
    if (!responseData.istrue && responseData.status === 801) {
        router.push('/views/login');
    }

    return response;
}, e => {
    return Promise.reject(e);
});

export default instance

export { baseurl, bus_baseurl }
