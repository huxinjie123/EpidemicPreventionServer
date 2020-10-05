/**
 * @Author: yk 
 * @Date: 2019-12-15 22:07:26 
 * @Description: 权限控制
 */
import permissionApi from '@/api/permission';

const state = {
  permissionList: []
}

const actions = {
  getPermissionList: async ({ state, commit }) => {
    if (state.permissionList.length) return
    const List = await permissionApi.getPermissionList();
    commit('updatePermissionList', List.data)
  }
}

const mutations = {
  updatePermissionList: (state, payload) => {
    state.permissionList = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};