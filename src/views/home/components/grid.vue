<template>
     <van-grid  clickable :border="false" :column-num="5"  class="grid">
        <van-grid-item v-for="(item,index) in iconList" :key="index" @click="test">
          <van-image :src="item.imgUrl" />
        </van-grid-item>
      </van-grid>
</template>

<script>
export default {
  props:['iconList'],
  methods:{
    test(){
      console.log(33);
       
      this.$router.push('/channel')
      
    }
  }
};
</script>
 
<style lang="scss" scoped>
   .grid {
    /deep/ {
      .van-grid-item__content {
        padding: 0;
      }
    }
  }
</style>