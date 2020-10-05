/**
 * @Author: yuankai
 * @Date: 2019-12-06 16:49:06
 * @Description: 登录页面
 */
<template>
  <div id="login-page">
    <h1>登录页</h1>
    <el-input v-model="username" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
    <el-button @click="Login">登陆</el-button>
  </div>
</template>

<script>
import loginApi from "../../api/login";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },

  computed: {},

  methods: {
    Login() {
      const LOGIN_DATA = {
        username: this.username,
        password: this.password
      };
      loginApi
        .login(LOGIN_DATA)
        .then(res => {
          console.log(res);
          this.$message.success("登陆成功");
          this.$router.push({ name: "HomeContainer" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {}
};
</script>
<style lang="scss" scoped>
#login-page {
  text-align: center;
}
</style>
