<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="xline"></div>这是商品详情页
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$toast("这是编号为  " + this.$route.params.id + "  的商品");
  }
};
</script>

<style>
</style>