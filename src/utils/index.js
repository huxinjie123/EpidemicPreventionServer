/**
 * @Author: yk 
 * @Date: 2019-12-16 15:59:16 
 * @Description: 工具类函数
 */
import store from '@/store';

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export function includePermission(permissions = []) {
  if (!permissions.length) return true
  const permissionList = store.state.permissionList.permissionList
  return !!permissions.find(permission => permissionList.includes(permission))
}