/**
 * @Author: yk 
 * @Date: 2019-12-15 22:20:01 
 * @Description: 权限
 */

import base from './base'
import axios from '../utils/http'

const permissionApi = {
  getPermissionList() {
    return axios({
      method: "get",
      url: `${base.local}/permission`,
    });
  }
}

export default permissionApi