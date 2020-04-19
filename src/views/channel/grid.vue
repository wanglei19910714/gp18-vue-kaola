<template>
<div>
     <van-grid :border="false" :column-num="iconList.length"   class="grid grid1">
        <van-grid-item v-for="(n,index) in iconList" :key="index">
        <a href=""></a>
        </van-grid-item>
      </van-grid>

       <van-grid :border="false" :column-num="iconList.length"   class="grid grid2">
        <van-grid-item v-for="(n,index) in iconList" :key="index+5">
        <a :href="n"></a>
        </van-grid-item>
      </van-grid>
</div>
   
</template>

<script>
export default {
 
  data(){
    return {
      iconList:[
       
      ]
    }
  },
  methods:{
    // h(){
    //   console.log(34);
      
    // }
  },
  async created() {
    let rs = await this.$http.get("/api/channel/iconList");
    this.iconList = rs.data.iconList;
  } 
};
</script>
 
<style lang="scss" scoped>
   .grid {
     height: 90px;
     background: url(https://kaola-haitao.oss.kaolacdn.com/120c59b4-2171-4df7-abf9-97eaf49523c7T2003121604_960_231.jpg) center top;
     background-size: cover;
     
     a{
       width: 100%;
       height: 90px;
       display: block;
     }
    /deep/ {
      .van-grid-item__content {
        padding: 0;
      }
      .van-grid-item__content{
        background: none;
      }
    }
  }

  .grid2{
     background: url(https://haitao.nos.netease.com/b3db199a-fc27-4e47-8f04-4561bdb5d875T1911181444_960_218.jpg) center top;
     background-size: cover;
     
  }
</style>