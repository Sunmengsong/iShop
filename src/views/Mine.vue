<template>
  <div>
    <div class="mine-head" @click="toPerson">
      <img src="../assets/images/mine/1.jpg" />
      <span class="nickName">
        昵称昵称_阿松
        <span class="mine-update">__点击编写个人信息</span>
      </span>
    </div>
    <!-- 我的订单 -->
    <div class="my-order">
      <div class="my-order-title">
        <span>我的订单</span>
        <van-icon name="arrow" />
      </div>
      <div class="xline"></div>
      <div class="my-order-section">
        <div>
          <img src="../assets/images/mine/order.jpg" />
          <span>待付款</span>
        </div>
        <div>
          <img src="../assets/images/mine/order.jpg" />
          <span>待发货</span>
        </div>
        <div>
          <img src="../assets/images/mine/order.jpg" />
          <span>已发货</span>
        </div>
        <div>
          <img src="../assets/images/mine/order.jpg" />
          <span>无效订单</span>
        </div>
      </div>
    </div>
    <!-- 我的xxxx -->
    <div class="my-order help">
      <div class="my-order-title">
        <span>我的xxx</span>
        <van-icon name="arrow" />
      </div>
      <div class="xline"></div>
      <div class="my-order-section">
        <div>
          <img src="../assets/images/mine/order.jpg" />
          <span>收藏</span>
        </div>
        <div>
          <img src="../assets/images/mine/order.jpg" />
          <span>地址</span>
        </div>
        <div>
          <img src="../assets/images/mine/order.jpg" />
          <span>客服</span>
        </div>
        <div>
          <img src="../assets/images/mine/order.jpg" />
          <span>帮助</span>
        </div>
      </div>
    </div>
    <div class="logout">
      <van-button square plain hairline type="danger" @click="doLoginOut">退出登录</van-button>
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar";
import "../assets/css/mine.css";
export default {
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    doLoginOut() {
      //console.log(this.$store);
      this.$store.state.isLogin = false;
      sessionStorage.removeItem("uname");
      this.$router.push("/");
    },
    // 编辑个人信息
    toPerson() {
      this.$toast("跳转至编辑个人信息");
    }
  },
  beforeRouteEnter: (to, from, next) => {
    //console.log(this);
    next(vm => {
      //console.log(vm);
      if (!sessionStorage.getItem("uname") && !vm.$store.state.isLogin) {
        next({ path: "/login" });
      } else {
        next();
      }
    });
  },
  components: {
    Tabbar
  }
};
</script>

<style></style>
