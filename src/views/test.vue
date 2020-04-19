<template>
  <div>
  <van-grid clickable :column-num="2" v-for="n in 3" :key="n">
  <van-grid-item icon="home-o" text="路由跳转" @click="handleClick">
    <van-image src="https://kaola-haitao.oss.kaolacdn.com/be97e628-df3a-4b31-82ee-edf3686883d2T1907021531_192_220.png" />
</van-grid-item>
  
</van-grid>
  </div>
</template>

<style lang="scss" scoped>
img{
  width: 50px;
}
</style>

<script>
export default {
  props:['iconList'],
  methods:{
    handleClick(){
      console.log(2);
      
    }
  }
};
</script>
