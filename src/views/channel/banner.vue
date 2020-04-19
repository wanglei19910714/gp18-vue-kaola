<template>
  <div>
    <van-swipe
      class="my-swipe banner"
      :autoplay="2000"
      indicator-color="white"
      :height="160"
      
    >
      <van-swipe-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.imgUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: []
    };
  },

  async created() {
    let rs = await this.$http.get("/api/channel/dataList");
    this.bannerList = rs.data.bannerList;
  } 
};
</script>
 
<style lang="scss" scoped>
.banner{
  img {
    height: 160px;
    width: 100%;
  }
}


/deep/ {
  .van-swipe__indicator {
    height: 4px;
    background: rgb(133, 126, 126);
    border-radius: 0;
  }
  .van-swipe__indicator--active {
    background: rgb(83, 83, 83) !important;
    width: 12px;
  }
}

.notice{
  height: 34px;
  background: #fff;
   padding: 0 10px;
  /deep/{
    .van-icon__image {
      width: 64px;
      height: 25px;
      margin-right: 10px;;
    }
    .van-notice-bar {
        padding: 0 10px;
        
    }


  } 
}
</style>