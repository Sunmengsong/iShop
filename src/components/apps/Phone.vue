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
        title: "手机数码",
        list: [
          {
            pic: require("../../assets/images/apps/xiaomi.png"),
            type: "小米"
          },
          {
            pic: require("../../assets/images/apps/huawei.jpg"),
            type: "华为"
          },
          {
            pic: require("../../assets/images/apps/iphone.jpg"),
            type: "iPhone"
          },
          {
            pic: require("../../assets/images/apps/vivo.png"),
            type: "vivo"
          },
          {
            pic: require("../../assets/images/apps/sanxing.png"),
            type: "三星"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>