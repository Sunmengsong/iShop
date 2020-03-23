<template>
  <div style="padding:5px">
    <div class="title">{{List.title}}</div>
    <div class="second-section">
      <router-link :to="'type?title='+it.type" v-for="(it,idx) in List.list" :key="idx">
        <img :src="it.pic" />
        <div class="subtitle">{{it.type}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: {
        title: "热门推荐",
        list: [
          {
            pic: require("../../assets/images/apps/xiaomi.png"),
            type: "手机"
          },
          {
            pic: require("../../assets/images/apps/xiaomi.png"),
            type: "全面屏手机"
          },
          {
            pic: require("../../assets/images/apps/xiaomi.png"),
            type: "口罩"
          },
          {
            pic: require("../../assets/images/apps/xiaomi.png"),
            type: "充电宝"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>