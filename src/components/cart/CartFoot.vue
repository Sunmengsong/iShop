<template>
  <div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip"> 你的收货地址不支持同城送, <span>修改地址</span> </span>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    onSubmit() {
      this.$toast({
        message: "正在提交..",
        loadingType: "spinner",
        duration: 2000
      });
      setTimeout(() => {
        this.$toast("提交成功");
      }, 2000);
    }
  }
};
</script>

<style></style>
