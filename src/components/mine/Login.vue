<template>
  <div class="loginBg">
    <h3>登录</h3>
    <van-cell-group class="loginForm">
      <van-field
        v-model="uname"
        label="用户名:"
        left-icon="user-o"
        right-icon="warning-o"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="upwd"
        clearable
        label="密码:"
        left-icon="flower-o"
        placeholder="请输入密码"
        type="password"
      />
      <div class="other-login">
        <div @click="$toast('使用手机号登录')">使用手机号登录</div>
        <div @click="$toast('跳转至注册')">没有账号?快去注册</div>
      </div>
      <van-button size="large" square plain hairline type="danger" @click="doLogin">登录</van-button>
    </van-cell-group>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../Tabbar";
import "../../assets/css/login.css";
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      unameIcon: "",
      upwdIcon: ""
    };
  },
  methods: {
    doLogin() {
      if (this.uname !== "asong" && this.upwd !== "123456") {
        this.$toast("用户名或密码错误");
      } else {
        this.$store.commit("login");
        sessionStorage.setItem("uname", this.uname);
        this.$toast("登录成功");
        this.$router.go(-1);
      }
    }
  },
  components: {
    Tabbar
  }
};
</script>

<style>
</style>