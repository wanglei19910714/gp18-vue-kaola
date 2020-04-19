<template>
  <div class="notice">
    <img
      src="https://haitao.nos.netease.com/922cb847-6556-4bb2-b40d-195fbbd502a2T20021101053_192_76.jpg"
      alt
      class="title"
    />

    <van-swipe
      class="my-swipe banner"
      :autoplay="4000"
      :show-indicators="false"
      style="height: 34px;"
      vertical
    >
      <van-swipe-item v-for="(item,index) in noticeList" :key="index">{{item.title}}</van-swipe-item>
    </van-swipe>

    <button class="btn">
      <img
        src="https://haitao.nos.netease.com/8a43523e-1d25-41e9-ab87-2ce2b755ab4fT19120101400_162_76.jpg"
        alt
        class="btn"
      />
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noticeList: []
    };
  },

  async created() {
    let rs = await this.$http.get("/api/channel/noticeList");
    this.noticeList = rs.data.noticeList;
  } 
};
</script>
<style lang="scss" scoped>
.notice {
  display: flex;
  padding: 0 6px;
  height: 34px;
  align-items: center;
  .my-swipe {
    flex: 1;
    padding: 0 5px;
    line-height: 34px;
    color: #666;
   
  }
  .title {
    width: 64px;
    height: 25px;
  }

  .btn {
    width: 54px;
    height: 26px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>