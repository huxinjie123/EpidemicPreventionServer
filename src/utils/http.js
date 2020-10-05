/**
 * @author yk
 * @date 2019/4/17
 * @Description: 封装axios
 *               请求拦截,响应拦截,错误统一处理
 */
// import Vue from 'vue'
import axios from 'axios'
// import store from '@/store'
// import { Toast } from 'vant';

// Vue.use(Toast);

/**
 * @author yk
 * @date 2019/4/17
 * @Description: 创建axios实例
 */
const instance = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
});

// instance.defaults.baseURL = 'http://192.168.1.143:8080';
// instance.defaults.baseURL = 'http://localhost:8081';

//设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// instance.defaults.headers.post['Content-Type'] = 'charset=UTF-8';


/**
 * @Description: 请求拦截器
 *               每次请求前,如果存在token则在请求头中携带token.
 *               如有其它需求,自行添加.
 *               ps:token也可以放在localStorage,cookie等中.
 * @author: yk
 */
instance.interceptors.request.use(
  config => {
    // const token = store.getters.token;
    // token && (config.headers.Authorization = token);       // 把vuex中的token加入请求头
    // token && (config.headers['X-Token'] = getToken());  //用cookie中的token
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
);


/**
 * @Description: 响应拦截器
 * @author: yk
 */

instance.interceptors.response.use(
  //请求成功
  // res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // return res
  response => {
    //自行添加处理
    return response
  },
  //请求失败
  error => {
    //自行添加处理
    // const {response} = error;
    // if (response) {
    //   errorHandle(response.status,response.data.message)
    // }
    console.log('err:---', error);      // 用于调试
    // this.$toast({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // });
    return Promise.reject(error)
  }
);


export default instance
