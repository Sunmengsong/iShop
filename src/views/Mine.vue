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
      <div class="my-order-title" @click="toOrderList(0)">
        <span>我的订单</span>
        <van-icon name="arrow" />
      </div>
      <div class="xline"></div>
      <div class="my-order-section">
        <div v-for="(item,index) in orderNavList" :key="index" @click="toOrderList(item.state)">
          <img :src="item.pic" />
          <span>{{item.title}}</span>
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
        <div v-for="(item,index) in chinnelNavList" :key="index" @click="toMine(item.path)">
          <img :src="item.pic" />
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>

    <!-- 登出 -->
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
      isLogin: false,
      orderNavList: [
        {
          title: "待付款",
          state: 1,
          pic: require("../assets/images/mine/order.jpg")
        },
        {
          title: "待发货",
          state: 2,
          pic: require("../assets/images/mine/order.jpg")
        },
        {
          title: "已发货",
          state: 3,
          pic: require("../assets/images/mine/order.jpg")
        },
        {
          title: "无效订单",
          state: 4,
          pic: require("../assets/images/mine/order.jpg")
        }
      ],
      chinnelNavList: [
        {
          title: "我的收藏",
          pic: require("../assets/images/mine/order.jpg"),
          path: "/mine/favorite"
        },
        {
          title: "我的地址",
          pic: require("../assets/images/mine/order.jpg"),
          path: "/mine/address"
        },
        {
          title: "联系客服",
          pic: require("../assets/images/mine/order.jpg"),
          path: "/mine/callme"
        },
        {
          title: "获取帮助",
          pic: require("../assets/images/mine/order.jpg"),
          path: "/mine/gethelp"
        }
      ]
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
    },
    toOrderList(state) {
      this.$router.push("/orderlist?state=" + state);
    },
    toMine(path) {
      this.$router.push(path);
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
