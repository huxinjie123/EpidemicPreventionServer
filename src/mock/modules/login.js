/**
 * @Author: yk 
 * @Date: 2019-12-15 20:29:06 
 * @Description:  登陆
 */
import { param2Obj } from '@/utils'

const USER_MAP = {
  admin: {
    code: 0,
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: 'Super Admin'
  },
  editor: {
    code: 0,
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    name: 'Normal Editor'
  }
}

const loginByUsername = config => {
  const { username } = JSON.parse(config.body)
  return USER_MAP[username]
}

const getUserInfo = config => {
  const { token } = param2Obj(config.url);
  if (USER_MAP[token]) {
    return USER_MAP[token]
  } else {
    return false
  }
}

export default {
  loginByUsername,
  getUserInfo
}