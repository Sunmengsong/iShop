<template>
  <div>这是商品详情页</div>
</template>

<script>
export default {
  mounted() {
    this.$toast("这是编号为  " + this.$route.params.id + "  的商品");
  }
};
</script>

<style>
</style>