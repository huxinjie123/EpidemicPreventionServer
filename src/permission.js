/**
 * @Author: yk 
 * @Date: 2019-12-16 16:33:33 
 * @Description: 权限控制
 */
import store from './store';
import router from './router';
import { Message } from 'element-ui'
import { includePermission } from '@/utils';

// const whiteList = ['/login'] // 不重定向白名单

router.beforeEach(async (to, from, next) => {
  await store.dispatch('permissionList/getPermissionList')
  const { permissions } = to.meta
  if (permissions) {
    const hasPermission = includePermission(permissions)
    if (!hasPermission) {
      Message.error({
        message: '对不起,您没有权限'
      })
      next({name: 'Login'})
    }
  }
  next()
})