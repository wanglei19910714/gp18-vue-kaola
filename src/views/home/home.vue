<template>
  <div class="home-page">
    <Ad v-show="isShowAd"></Ad>
    <!-- 头部 -->
    <Header></Header>

    <div class="scroll-wrapper" ref="scrollWrapper">
      <div class="scroll-content">
        <!-- 轮播图 -->
        <div>
          <Banner :bannerList="bannerList"></Banner>
        </div>

        <!-- 一张图片 -->
        <div class="image-row">
          <img src="img/image-row.png" alt />
        </div>

        <!-- 宫格 -->
        <div class="icon-slide">
          <Grid :iconList="iconList"></Grid>
        </div>

        <!-- 广告 -->
        <div class="ad">
          <img
            src="https://kaola-haitao.oss.kaolacdn.com/dc80288c-c65e-4903-bbeb-da5a74bff3acT2004091444_900_225.png"
            alt
          />
        </div>

        <!-- 必买清单 -->
        <Manifest :wellList="wellList"></Manifest>

        <!-- 为你推荐 -->
        <div class="goods">
          <div class="best">
            <img
              src="https://kaola-haitao.oss.kaolacdn.com/61556274-32ef-44bf-84af-b3d4485ac157.png"
              alt
              class="timg"
            />
          </div>
          <div class="list">
            <ListItem v-for="item  in  goodsList" :key="item.goodsId" :item="item"></ListItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Ad from "../../components/Ad";
import Header from "./components/header";
import Banner from "./components/banner";
import Grid from "./components/grid";
import Manifest from "./components/manifest";
import ListItem from "./components/list-item";
import { Toast } from "vant";

import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import PullDown from '@better-scroll/pull-down'
BScroll.use(PullDown)
BScroll.use(Pullup);

export default {
  components: {
    Ad,
    Header,
    Banner,
    Grid,
    Manifest,
    ListItem
  },
  data() {
    return {
      isShowAd:true,
      pageNo: 4,
      iconList: [],
      wellList: [],
      bannerList: [],
      goodsList: [],
      hasMore: true
    };
  },
  async created() {
    let rs = await this.$http.get("/api/home/dataList");
    this.iconList = rs.data.iconList;
    this.wellList = rs.data.wellList;
    this.bannerList = rs.data.bannerList;

    let result = await this.getGoodsList();
    this.goodsList = result.data.data.home[1].globalGoodsItemList;

    this.$nextTick(() => {
      this.initBscroll();
    });
  },

  methods: {
    getGoodsList() {
      return this.$http.get(
        "/kaola/home/index.html?t=1587187659405&pageNo=" + this.pageNo
      );
      // console.log(result.data.data.home[1].globalGoodsItemList);
      //  console.log(result.data.data);
      // this.goodsList = result.data.data.home[1].globalGoodsItemList;
    },

    initBscroll() {
      this.bscroll = new BScroll(this.$refs.scrollWrapper, {
        click:true,
        scrollY: true,
        pullUpLoad: true,
         pullDownRefresh: {
            threshold: 40,
            stop: 0
          }
      });
      //加载更多
      this.bscroll.on("pullingUp", this.pullingUpHandler.bind(this));
      
      //最新数据
      this.bscroll.on('pullingDown', this.pullingDownHandler.bind(this))
      this.bscroll.on('scrollEnd', this.scrollHandler.bind(this))

    },
    scrollHandler(pos){
      if(pos.y<-30){
          this.isShowAd = false
      }else{
        this.isShowAd = true
      }
      
    },
    async pullingDownHandler(){
      this.pageNo=4;
      let rs = await this.getGoodsList();
       this.goodsList = rs.data.data.home[1].globalGoodsItemList;
       this.bscroll.finishPullDown()
       this.bscroll.refresh();
    },
    async pullingUpHandler() {
      if (!this.hasMore) {
        Toast({
          message: "没有更多内容了",
          position: "bottom"
        });
          this.bscroll.finishPullUp();
          return
      }
      this.pageNo++;
      let rs = await this.getGoodsList();
      if (!rs.data.data.hasMore) {
        this.hasMore = false;
      }
     if(rs.data.data.home.length!=0){
       this.goodsList.push(...rs.data.data.home[0].globalGoodsItemList) 
     }
      this.bscroll.finishPullUp();
      this.bscroll.refresh();
    }
  }
};
</script>
 
<style lang="scss" scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  .scroll-wrapper {
    height: 100%;
    flex: 1;
    overflow: hidden;
    .scroll-content {
      .image-row {
        height: 22px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .ad {
        img {
          width: 100%;
        }
      }

      .goods {
        .best {
          .timg {
            display: block;
            height: 61px;
          }
        }

        .list {
          background: #f2f2f2;
          padding: 5px;
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
  }
}
</style>