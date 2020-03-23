<template>
  <div class="home">
    <!-- 搜索栏 -->
    <van-sticky offset-top="10px">
      <div class="search">
        <van-search
          v-model="search"
          placeholder="请输入搜索关键词"
          shape="round"
          show-action
          @search="onSearch"
          action-text
          @focus="toSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </van-sticky>
    <!-- 轮播图 -->
    <Swipper></Swipper>
    <!-- 导航栏 -->
    <NavList></NavList>
    <!-- 推荐 -->
    <div class="recommend">
      <div class="home-title">
        <img src="../assets/images/icons/zan.png" /> 阿松推荐
      </div>
      <div class="xline"></div>
      <div class="recommend-section">
        <img class="master-img" src="../assets/images/banner/banner03.jpg" />
        <div class="second-img">
          <img src="../assets/images/banner/banner02.jpg" alt />
          <img src="../assets/images/banner/banner04.jpg" alt />
        </div>
      </div>
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar";
import Swipper from "../components/Home/Swipper";
import NavList from "../components/Home/NavList";
import "../assets/css/home.css";
export default {
  name: "Home",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    toSearch() {
      this.$router.push("/home/search");
    },
    onSearch() {
      this.$toast(`搜索了${this.search}的相关内容`);
    },
    onCancel() {
      this.$toast(`点击了取消`);
    }
  },
  components: {
    Swipper,
    NavList,
    Tabbar
  }
};
</script>

<style>
</style>
