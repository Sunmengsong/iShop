<template>
  <div>
    <van-nav-bar title="我的地址" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="xline"></div>

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "河南省郑州市金水区文化路",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "河南省郑州市高新区xx路",
          isDefault: false
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onAdd() {
      //Toast("新增地址");
      this.$toast("新增地址");
    },
    onEdit(item, index) {
      //Toast("编辑地址:" + index);
      this.$toast("编辑id为:  " + index + "  的地址详情");
    }
  }
};
</script>

<style>
</style>