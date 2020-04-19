<template>
  <van-tabs v-model="active" scrollspy sticky title-active-color="#E31436" line-height="2" @click="onClick" class="mytabs">
    <van-tab v-for="(value,key,index) in tabList" :title="value" :key="index">
      <component :is="key" :currentIndex="currentIndex"/>
    </van-tab>
  </van-tabs>
</template>


<script>
import Brand from "./tarbar/brand";
import Activity from "./tarbar/activity";
import Like from "./tarbar/like";
import Choice from "./tarbar/choice";
export default {
  components: {
    Brand,
    Activity,
    Like,
    Choice
  },
  data() {
    return {
      active: 0,
      currentIndex:-1,
      tabList: {
        Brand: "全球大牌",
        Activity: "精选活动",
        Like: "猜您喜欢",
        Choice: "个护精选"
      }
    };
  },
   methods: {
    onClick(name, title) {
      console.log(name,title);
      
    },
  }
};
</script>
<style lang="scss" scoped>
 
/deep/ .van-tabs--line{
  margin-bottom: 8px;
}
</style>
 