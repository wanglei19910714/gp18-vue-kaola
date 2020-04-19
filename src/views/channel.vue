<template>
  <div class="channel-page">
    
    <Ad></Ad>
    <Header></Header>
    <div class="search">
      <van-search placeholder="请输入搜索关键词" />
    </div>

    <Banner></Banner>
    <Notice></Notice>
    <Grid></Grid>
  
<Tabbar ></Tabbar>
    
    
  </div>
</template>

<script>
import Ad from "../components/Ad";
import Header from "./channel/header";
import Banner from "./channel/banner";
import Notice from "./channel/notice";
import Grid from "./channel/grid";
import Tabbar from './channel/tabbar'
export default {
  components: {
    Ad,
    Header,
    Banner,
    Notice,
    Grid,
    Tabbar
  }
};
</script>

<style lang="scss" scoped>
.channel-page {
  height: 100%;

  // display: flex;
  // flex-direction: column;
  .search {
    height: 38px;
    padding: 7px 10px 0 10px;
    /deep/ {
      .van-search {
        padding: 0;
        .van-cell {
          padding: 0;
        }
      }
      .van-field__control {
        font-size: 12px;
        border-radius: 3px;
      }
      .van-cell--borderless {
        background: #e6e6e7;
      }
      .van-icon-search {
        padding-left: 4px;
        font-weight: 600;
        color: #666;
      }
    }
  }
  // .myTabbar{
  //   flex:1;
  //    overflow: height;
  //   // display: flex;
  //   // /deep/{
  //   //   .van-tabs__content{
  //   //     flex: 1;
  //   //    overflow: auto;
  //   //   }
  //   // }
  // }
}
</style>
 
