<template>
  <div>
    <van-nav-bar title="订单列表" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="xline"></div>
    <van-tabs v-model="state" @click="toOrderList">
      <van-tab title="全部订单" name="0"></van-tab>
      <van-tab title="待付款" name="1"></van-tab>
      <van-tab title="待发货" name="2"></van-tab>
      <van-tab title="已发货" name="3"></van-tab>
      <van-tab title="无效订单" name="4"></van-tab>
    </van-tabs>
    <div>订单状态码: {{state}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 0,
      stateText: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    toOrderList(name, title) {
      //console.log(1);
      this.$router.replace("/orderlist?state=" + name);
    }
  },
  created() {
    this.state = this.$route.query.state;
  }
};
</script>

<style>
</style>