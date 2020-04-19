<template>
     <van-swipe
        class="my-swipe banner"
        :autoplay="3000"
        indicator-color="white"
        :height="191"
        @change="onChange"
      >
        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imgUrl" alt />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <span>{{ current + 1 }}</span>/
            <span>{{bannerList.length}}</span>
          </div>
        </template>
      </van-swipe>
</template>

<script>
export default {
  props:['bannerList'],
  data() {
    return {
      bannerNum: 8,
      current: 0,
      
    };
  },
  
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
 
<style lang="scss" scoped>
 .banner {
    height: 191px;
    img {
      width: 100%;
      height: 191px;
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
</style>