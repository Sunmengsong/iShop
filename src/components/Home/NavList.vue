<template>
  <div class="contain">
    <div class="navlist-item" v-for="(item,index) in 5" :key="index">
      <img class="nav-img" src="../../assets/images/icons/icon1.png" />
      <div class="nav-title">每日签到</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contain {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background: #fff;
}
.navlist-item {
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.nav-title {
  font-size: 14px;
  padding-top: 5px;
}
</style>