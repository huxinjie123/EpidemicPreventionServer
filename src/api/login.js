/**
 * @Author: yk 
 * @Date: 2019-12-15 20:57:53 
 * @Description:  登陆
 */
import base from './base'
import axios from '../utils/http'

const LoginApi = {
  login(data) {
    return axios({
      method: "post",
      url: `${base.local}/login`,
      data
    });
  }
}

export default LoginApi