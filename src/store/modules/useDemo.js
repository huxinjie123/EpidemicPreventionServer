const SET_TEST_DEMO = "SET_TEST_DEMO";

const getters = {
  getTest: state => {
    return state.test;
  }
};

const state = {
  test: "test"
};

const actions = {
  setTest: ({ commit }, value) => {
    commit(SET_TEST_DEMO, value);
  }
};

const mutations = {
  [SET_TEST_DEMO](state, value) {
    state.test = value;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};


/* 
use:

vue组件中按需引入辅助函数:  

const {mapState,mapActions,mapMutations,mapGetters} = createNamespacedHelpers('xxx命名空间')

eg:
    计算属性中:
    ...mapGetters([
      'getTest'
    ])                   个人监听时使用它.
    ...mapState({
        testDemo: state => state.test
    }),                  可以重新命名
    方法中
    ...mapActions([
      'setTest',
    ]),
    ...mapMutations({
      setTest2: 'SET_TEST_DEMO',
    }),
    之后在组件中就可以this.xxx来使用

    从接口调回数据直接修改store, 
    store.dispatch('/demo/setDemo',data).then().catch()
*/
