/**
 * @Author: yk 
 * @Date: 2019-12-15 20:34:15 
 * @Description:  完善mock数据
 */
import Mock from 'mockjs';
import loginAPI from './modules/login';
import permissionAPI from './modules/permission';

Mock.setup({
  timeout: '300-600'
})

// 登录相关
Mock.mock(/\/login/, 'post', loginAPI.loginByUsername);

// 权限相关
Mock.mock(/\/permission/, 'get', permissionAPI.getPermissionList)
