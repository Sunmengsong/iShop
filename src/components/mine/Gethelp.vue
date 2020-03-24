<template>
  <div>
    <van-nav-bar title="获取帮助" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="xline"></div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>