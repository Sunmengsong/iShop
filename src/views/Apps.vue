<template>
  <div class="apps-contain">
    <div class="side">
      <van-sidebar v-model="curSidebar" @change="onChange">
        <van-sidebar-item
          v-for="(item,index) in appsList"
          :key="index"
          :title="item.title"
          :to="item.path"
        />
      </van-sidebar>
    </div>
    <div class="sideContent">
      <router-view></router-view>
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar";
export default {
  data() {
    return {
      curSidebar: 0,
      appsList: [
        { title: "热门推荐", path: "hottest" },
        { title: "手机数码", path: "phone" },
        { title: "男装女装", path: "yifu" }
      ]
    };
  },
  methods: {
    onChange(index) {
      //this.$notify({ type: "primary", message: index });
      //console.log(index);
    }
  },
  components: {
    Tabbar
  }
};
</script>

<style>
.apps-contain {
  display: flex;
}
.sideContent {
  height: 620px;
  background: #fff;
}

/* 分栏样式 */
.title {
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
}
.second-section {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.second-section > a {
  display: block;
  width: 33%;
  text-align: center;
  color: #333;
  text-decoration: none;
}
.second-section img {
  width: 70%;
}
.second-section .subtitle {
  width: 100%;
  font-size: 14px;
}
</style>
