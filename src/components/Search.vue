<template>
  <div class="search">
    <van-search
      v-model="search"
      placeholder="请输入搜索关键词"
      shape="round"
      show-action
      @search="onSearch"
      action-text
      use-left-icon-slot
    >
      <div slot="action" @click="onSearch">搜索</div>
      <div slot="left-icon" @click="Back">
        <van-icon name="arrow-left" />
      </div>
    </van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    onSearch() {
      this.$toast(`搜索了${this.search}的相关内容`);
    },
    onCancel() {
      this.$toast(`点击了取消`);
    },
    Back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>