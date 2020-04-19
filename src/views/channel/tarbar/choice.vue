<template>
  <div class="activity">
    <div class="title">
      <div class="line"></div>
      <div class="text">
        <h2>个护精选</h2>
        <span>爆款星品 优选推荐</span>
      </div>
    </div>

    <ul class="list">
      <li v-for="(item,index) in choiceList" :key="index">
        <div class="img">
          <img :src="item.content.imageUrl" alt />
          <div class="mark">
            <p class="hot" v-if="item.content.goodsTag">{{item.content.goodsTag}}</p>
            <p class="tag" v-if="item.content.activityTag">{{item.content.activityTag}}</p>
          </div>
        </div>
        <div class="desc">
          <p>{{item.content.title}}</p>
          <span class="currentPrice">¥{{item.content.newUserPrice}}</span>
          <span class="marketPrice">¥{{item.content.marketPrice}}</span>
          <span class="shop"><van-icon name="cart-o" /></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choiceList: []
    };
  },
  async created() {
    let rs = await this.$http.get("/api/channel/choiceList");
    this.choiceList = rs.data.choiceList;
     
  }
};
</script>
<style lang="scss" scoped>
.activity {
    

  .title {
    .line {
      height: 10px;
      background: rgb(245, 242, 242);
    }
    .text {
      height: 57px;
      text-align: center;
      h2 {
        margin: 10px 0;
      }
      span {
        color: rgb(216, 213, 213);
      }
    }
  }

  .list {
    background: rgb(245, 242, 242);
    padding: 0 5px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 116.5px;
      height: 184px;
      margin: 2px;
      background: #fff;
      .img {
        width: 116.5px;
        height: 116.5px;
        position: relative;
        margin-bottom: 1px;
        img {
          height: 100%;
          width: 100%;
        }
        .mark {
          position: absolute;
          left: -2px;
          bottom: 8px;
        
          .hot {
            width: 32px;
            height: 15px;
            padding: 0 4px;
            color: #fff;
            border-top-right-radius:32px;
            border-bottom-right-radius:32px;

            background: rgb(141, 84, 223);
            margin-bottom: 5px;
          }
          .tag {
            // width: 55px;
            height: 15px;
             border-top-right-radius:55px;
            border-bottom-right-radius:55px;
            color: #fff;
            padding: 0 4px;
            background: rgb(255, 30, 50);
          }
        }
      }
      .desc {
          font-weight: 600;
        p {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          color:#333;
          font-size: 12px;
          margin: 5px 0;
          line-height: 16px;
          font-weight: 400;
        }
        .currentPrice{
            color: #FF1E32;
            font-size: 13px;
            font-weight: 500;
            margin: 4px;
            vertical-align: top;
        }
        .marketPrice{
            color: #999;
            font-size: 12px;
             vertical-align: top;
        }
        .shop{
            margin-left: 20px;
            font-size: 20px;
            text-align: center;
            color: #FF1E32;
            border:0;
           
        }
      }
    }
  }
}
</style>