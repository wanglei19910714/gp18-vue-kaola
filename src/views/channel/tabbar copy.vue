<template>
  <van-tabs v-model="active" scrollspy sticky title-active-color="#E31436" line-height="2">
    <van-tab v-for="(value,key,index) in tabList" :title="key" :key="index">
    <component :is="key"/>

    </van-tab>
    
    <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
    内容 {{ index }}
  </van-tabs>
</template>

<script>
import Brand from './tarbar/brand'
import Activity from './tarbar/activity'
import Like from './tarbar/like'
import Choice from './tarbar/choice'
export default {
  components:{
    Brand,
    Activity,
    Like,
    Choice
  },
  data() {
    return {
      active: 0,
      tabList: {Brand:"全球大牌", Activity:"精选活动", Like:"猜您喜欢", Choice:"个护精选"}
    };
  }
};
</script>