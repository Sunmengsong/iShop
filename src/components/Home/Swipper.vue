<template>
  <div class="swipper">
    <van-swipe :autoplay="2500" indicator-color="white">
      <van-swipe-item v-for="(item, index) in CarouselList" :key="index">
        <img :src="item.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CarouselList: [
        { cid: 1, pic: require("../../assets/images/banner/banner01.webp") },
        { cid: 2, pic: require("../../assets/images/banner/banner02.jpg") },
        { cid: 3, pic: require("../../assets/images/banner/banner03.jpg") },
        { cid: 4, pic: require("../../assets/images/banner/banner04.jpg") }
      ]
    };
  }
};
</script>

<style>
.swipper {
  height: 200px;
}
.swipper img {
  width: 100%;
  height: 200px;
  border-radius: 10px;
}
</style>
