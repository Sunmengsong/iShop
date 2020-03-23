<template>
  <div id="top">
    <van-nav-bar title="分类搜索" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="xline"></div>
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </van-sticky>
    <!-- 商品列表 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div>
          <div class="pro-item" v-for="(item,index) in list" :key="index">
            <router-link :to="'/details/'+item.pid">
              <img :src="item.pic" />
              <div class="pro-text">
                <div class="pro-title">{{item.title}}</div>
                <div class="pro-pa">
                  <div class="pro-price">¥{{item.price}}</div>
                  <van-tag class="pro-active" plain type="danger" v-if="item.active">{{item.active}}</van-tag>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <div class="toTop" @click="toTop" v-if="btnFlag">
      <van-icon name="upgrade" />
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../Tabbar";
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "价格升序", value: 0 },
        { text: "价格降序", value: 1 }
      ],
      option3: [
        { text: "默认排序", value: 0 },
        { text: "销量排序", value: 1 },
        { text: "好评排序", value: 2 }
      ],
      recomand: [
        {
          pid: 155,
          title:
            "小孩线衣线裤男女孩宝宝纯棉内衣套装儿童春秋薄长袖秋衣裤服 俊粉色公主 100(85-95cm)",
          price: 69,
          active: "买二送一",
          pic: require("../../assets/images/products/01.webp")
        },
        {
          pid: 223,
          title:
            "铜一家 纯铜九龙笔筒 文房四宝办公室桌面高档装饰工艺品书房摆件 青铜色 九龙笔筒",
          price: 328,
          active: "满减",
          pic: require("../../assets/images/products/02.webp")
        },
        {
          pid: 35,
          title:
            "恒洁卫浴HEGII 蹲便器冲水箱套装 便池蹲坑后进前排冲便器厕所蹲厕防臭节水套装 326B蹲便+611水箱(后进前排,含角阀软管",
          price: 699,
          active: "闪购",
          pic: require("../../assets/images/products/03.webp")
        },
        {
          pid: 41,
          title:
            "鞋柜简易组装门口小鞋柜实木鞋架简易家用防尘简约现代门厅多功能 换鞋凳+抽屉二门",
          price: 849,
          active: "",
          pic: require("../../assets/images/products/04.webp")
        },
        {
          pid: 533,
          title:
            "联想(Lenovo)M5900d商用办公台式电脑整机(AMD A4 4G 1T 键鼠 office 四年上门)19.5英寸",
          price: 1899,
          active: "买一送一",
          pic: require("../../assets/images/products/02.webp")
        },
        {
          pid: 612,
          title:
            "小孩线衣线裤男女孩宝宝纯棉内衣套装儿童春秋薄长袖秋衣裤服 俊粉色公主 100(85-95cm)",
          price: 69,
          active: "买二送一",
          pic: require("../../assets/images/products/03.webp")
        },
        {
          pid: 66,
          title:
            "小孩线衣线裤男女孩宝宝纯棉内衣套装儿童春秋薄长袖秋衣裤服 俊粉色公主 100(85-95cm)",
          price: 69,
          active: "",
          pic: require("../../assets/images/products/01.webp")
        },
        {
          pid: 81,
          title:
            "铜一家 纯铜九龙笔筒 文房四宝办公室桌面高档装饰工艺品书房摆件 青铜色 九龙笔筒",
          price: 328,
          active: "满减",
          pic: require("../../assets/images/products/02.webp")
        },
        {
          pid: 124,
          title:
            "恒洁卫浴HEGII 蹲便器冲水箱套装 便池蹲坑后进前排冲便器厕所蹲厕防臭节水套装 326B蹲便+611水箱(后进前排,含角阀软管",
          price: 699,
          active: "闪购",
          pic: require("../../assets/images/products/03.webp")
        },
        {
          pid: 45,
          title:
            "鞋柜简易组装门口小鞋柜实木鞋架简易家用防尘简约现代门厅多功能 换鞋凳+抽屉二门",
          price: 849,
          active: "",
          pic: require("../../assets/images/products/04.webp")
        },
        {
          pid: 14,
          title:
            "联想(Lenovo)M5900d商用办公台式电脑整机(AMD A4 4G 1T 键鼠 office 四年上门)19.5英寸",
          price: 1899,
          active: "",
          pic: require("../../assets/images/products/02.webp")
        },
        {
          pid: 89,
          title:
            "小孩线衣线裤男女孩宝宝纯棉内衣套装儿童春秋薄长袖秋衣裤服 俊粉色公主 100(85-95cm)",
          price: 69,
          active: "",
          pic: require("../../assets/images/products/03.webp")
        }
      ],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      btnFlag: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 列表刷新
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < this.recomand.length; i++) {
          this.list.push(this.recomand[i]);
        }
        this.loading = false;

        if (this.list.length >= 60) {
          this.finished = true;
        }
        //console.log(this.list);
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    // 返回顶部
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    toTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 150) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  },
  mounted() {
    //console.log(this.$route.query);
    this.$toast("这是类别为  " + this.$route.query.title + "  的页面");
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  components: {
    Tabbar
  }
};
</script>

<style>
.van-list > div {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
.pro-item {
  border-radius: 5px;
  background: #fff;
  width: 49%;
  overflow: hidden;
  margin-bottom: 8px;
}
.pro-item:nth-child(2n) {
  margin-left: 2%;
}
.pro-item a {
  color: #333;
  text-decoration: none;
}
.pro-item img {
  width: 100%;
}
.pro-item .pro-text {
  padding: 5px;
}
.pro-item .pro-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
}
.pro-item .pro-pa {
  display: flex;
  align-items: center;
}
.pro-item .pro-price {
  color: rgb(238, 119, 90);
  font-size: 14px;
}
.pro-item .pro-active {
  margin-left: 10px;
}
.van-tag::after {
  border-color: currentColor !important;
}
.van-list__finished-text,
.van-list__loading {
  display: block !important;
  text-align: center !important;
  line-height: 14px;
}

/* 返回顶部 */
.toTop {
  position: fixed;
  bottom: 90px;
  right: 30px;
}
.toTop .van-icon {
  font-size: 40px;
}
</style>