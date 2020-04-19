<template>
     <div class="manifest">
      <div class="block" v-for="(item,index) in wellList" :key="index">
        <div class="title">
          <span class="mainTitle">{{item.title}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
        </div>
        <div class="img">
          <img :src="item.imgUrl1" alt />
          <img :src="item.imgUrl2" alt />
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props:['wellList']
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.manifest {
    height: 154px;
    display: flex;
    // border: 1px solid black;
    .block {
      flex: 1;
      padding: 10px 0 0 15px;
      .title {
        margin-bottom: 18px;
        .mainTitle {
          font-size: 17px;
          font-weight: 600;
          color: #333;
          padding-right: 4px;
        }
        .subTitle {
          font-size: 12px;
        }
      }
      img {
        width: 77px;
        height: 77px;
      }
    }
    .block:nth-of-type(1) {
      @include border_1px("right", rgb(236, 230, 230));
    }
  }
</style>