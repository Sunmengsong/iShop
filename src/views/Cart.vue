<template>
  <div>
    <van-nav-bar title="购物车" left-text left-arrow @click-left="goBack"></van-nav-bar>
    <!-- 购物车主体 -->
    <div class="cart-section">
      <van-swipe-cell v-for="(item, index) in cartList" :key="index" :before-close="beforeClose">
        <van-card
          :num="item.num"
          :price="item.price"
          :desc="item.desc"
          :title="item.title"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <van-button slot="right" square text="删除" type="danger" class="delete-button" />
      </van-swipe-cell>
    </div>
    <cartfoot></cartfoot>
  </div>
</template>

<script>
import cartfoot from "../components/cart/CartFoot";
export default {
  data() {
    return {
      cartList: [
        { title: "一只猫", desc: "这是一只很好玩的猫", price: 999.99, num: 5 },
        { title: "张根源", desc: "在线贩卖源哥", price: 9999999.99, num: 1 },
        { title: "作者", desc: "作者的处置权", price: 0.01, num: 666 }
      ]
    };
  },
  components: {
    cartfoot
  },
  methods: {
    // 导航返回
    goBack() {
      this.$router.push("/");
    },
    // 商品左滑删除
    beforeClose({ position, instance }) {
      switch (position) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: "确定删除吗？"
            })
            .then(() => {
              instance.close();
              this.$toast("删除成功");
            })
            .catch(() => {
              this.$toast("取消删除");
            });
          break;
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    //console.log(this);
    next(vm => {
      //console.log(vm);
      if (!sessionStorage.getItem("uname") && !vm.$store.state.isLogin) {
        vm.$toast("您还未登录,请先登录");
        next({ path: "/login" });
      } else {
        next();
      }
    });
  }
};
</script>

<style scoped>
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
</style>
