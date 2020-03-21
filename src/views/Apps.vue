<template>
  <div class="apps-contain">
    <div class="side">
      <van-sidebar v-model="curSidebar" @change="onChange">
        <van-sidebar-item title="热门推荐" />
        <van-sidebar-item title="手机数码" />
        <van-sidebar-item title="家用电器" />
      </van-sidebar>
    </div>
    <div class="sideContent">
      <div v-if="curSidebar == 0">这是热门推荐</div>
      <div v-if="curSidebar == 1">这是手机数码</div>
      <div v-if="curSidebar == 2">这是家用电器</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curSidebar: 0
    };
  },
  methods: {
    onChange(index) {
      //this.$notify({ type: "primary", message: index });
      //console.log(index);
    }
  }
};
</script>

<style>
.apps-contain {
  display: flex;
}
</style>
