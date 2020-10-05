/**
 * @Author: yk 
 * @Date: 2019-12-16 12:43:40 
 * @Description: 权限指令
 */

import { includePermission } from '../utils/index';

const permissionHandle = (el, binding) => {
  const permissions = binding.value
  if (!includePermission(permissions)) {
    console.log(el);
    el.classList.add('blue-block')
  } else {
    el.classList.remove('blue-block')
  }
}

export default {
  inserted: permissionHandle,
  update: permissionHandle
}