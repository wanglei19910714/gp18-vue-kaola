<template>
  <div class="home-page">
    <Ad></Ad>
    <!-- 头部 -->
    <header>
      <div class="input-wrapper">
        <van-icon name="search" color="#f00" size="15" class="my-icon" />
        <input type="text" placeholder="象印保温杯" />
      </div>
      <div class="btn">登录/注册</div>
    </header>
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe
        class="my-swipe"
        :autoplay="2000"
        indicator-color="white"
        :height="224"
        @change="onChange"
      >
        <van-swipe-item v-for="n in bannerNum" :key="n">
          <img :src="`/img/banner/${n}.jpg`" alt />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <span>{{ current + 1 }}</span>/
            <span>{{bannerNum}}</span>
          </div>
        </template>
      </van-swipe>
    </div>
    <!-- 一张图片 -->
    <div class="image-row">
      <img src="img/image-row.png" alt />
    </div>
    <!-- 宫格 -->
    <div class="icon-slide">
      <van-grid :border="false" :column-num="5" icon-size="75px">
        <van-grid-item v-for="(item,index) in iconList" :key="index">
          <van-image :src="item" />
        </van-grid-item>
      </van-grid>
    </div>
    <div class="ad">
      <img src="https://kaola-haitao.oss.kaolacdn.com/dc80288c-c65e-4903-bbeb-da5a74bff3acT2004091444_900_225.png" alt="">
    </div>
    <!-- 必买清单 -->
    <div class="channel">
       <div class="block" v-for="(item,index) in wellList" :key="index">
         <div class="title">
           <span class="mainTitle">{{item.title}}</span>
           <span class="subTitle">{{item.subTitle}}</span>
         </div>
         <div class="img">
           <img :src="item.imgUrl1" alt="">
           <img :src="item.imgUrl2" alt="">
         </div>
       </div>
    </div>
    
    <!-- 为你推荐 -->
    <div class="best">
       <img src="https://kaola-haitao.oss.kaolacdn.com/61556274-32ef-44bf-84af-b3d4485ac157.png" alt="" class="timg">
    </div>
  </div>
</template>
<script>
import Ad from "../../components/Ad";

export default {
  components: {
    Ad
  },
 data(){
   return {
       bannerNum: 8,
      current: 0,
     iconList:[],
     wellList:[]
   }
 },
 async created(){
      let rs = await this.$http.get('/api/home/dataList')
       this.iconList = rs.data.iconList
      
       this.wellList = rs.data.wellList
  },
 
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
 
<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
.home-page {
  header {
    height: 45px;
    padding: 0 16px 0 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid lawngreen;
    .input-wrapper {
      display: flex;
      align-items: center;
      width: 268px;
      height: 30px;
      border-radius: 30px;
      border: 2px solid #f00;
      .my-icon {
        padding-left: 10px;
        font-weight: 800;
      }
      input {
        flex: 0.9;
        border: 0;
        height: 26px;
        font-size: 13px;
        color: #727273;
      }
    }
    .btn {
      width: 62px;
      height: 30px;
      font-size: 12px;
      border: 1px solid #f00;
      color: #f00;
      text-align: center;
      line-height: 30px;
      border-radius: 3px;
    }
  }
  .banner {
    height: 224px;
    img {
      width: 100%;
      height: 224;
    }

    .custom-indicator {
      position: absolute;
      left: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      // background: rgba(0, 0, 0, 0.8);
      span {
        display: inline-block;
        width: 15px;
        height: 15px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        border-radius: 15px;
        text-align: center;
      }
    }
  }
  .image-row {
    height: 22px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .icon-slide {
    /deep/ {
      .van-grid-item__content {
        padding: 0;
      }
    }
  }
 .ad{
   img{
     width: 100%;
   }
 }
  .channel{
    height: 154px;
    display: flex;
    // border: 1px solid black;
    .block{
      flex: 1;
      padding: 10px 0 0 15px;
      .title{
        margin-bottom: 18px;
        .mainTitle{
          font-size: 17px;
          font-weight: 600;
          color: #333;
          padding-right: 4px;
        }
        .subTitle{
          font-size: 12px;
        }

      }
      img{
        width: 77px;
        height: 77px;
      }
    }
    .block:nth-of-type(1){
      @include border_1px('right',rgb(236, 230, 230));
    }
  }

  .best{
    .timg{
      height: 61px;
    }
  }
}

 
</style>