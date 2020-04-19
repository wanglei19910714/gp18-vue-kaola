<template>
  <div class="brand">
    <div class="title">
      <div class="line"></div>
      <div class="text">
        <h2>全球大牌</h2>
        <span>宅家全球</span>
      </div>
    </div>

    <ul class="list">
      <li v-for="item in brandList" :key="item.brandId">
        <div>
          <img :src="item.img" alt class="b-img" />

          <div class="desc">
            <img :src="item.logo" alt class="m-img" />
            <div class="brand-name">
              <img :src="item.brandConfigMap.countryImgUrl" alt class="s-img" />
              <span>{{item.name}}</span>
            </div>
            <div class="sellPoint">
              <span class="text">{{item.brandConfigMap.sellPoint}}</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['currentIndex'],
  data() {
    return {
      brandList: []
    };
  },
  async created() {
    let rs = await this.$http.get("/api/channel/brandList");
    this.brandList = rs.data.brandList;
  }
};
</script>
<style lang="scss" scoped>
.brand {
 
  .title {
      .line{
          height: 20px;
          background: rgb(245, 242, 242);
      }
      .text{
          height: 57px;
          text-align: center;
          h2{
              margin: 10px 0;
          }
          span{
             color: rgb(216, 213, 213);
          }
      }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.33%;
      height: 186px;
      display: flex;
      text-align: center;
      position: relative;
      display: flex;
      justify-content: center;
      .desc {
        position: absolute;
        left: 0;
        bottom: 15px;
        .brand-name {
          width: 100%;
          text-align: center;
          margin-bottom: 4px;
          overflow: hidden;
          white-space: nowrap;
        }
      }

      .sellPoint {
        .text {
          display: inline-block;
          width: 95px;
          height: 15px;
          color: rgb(227, 20, 54);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-weight: 500;
        }
        /deep/.van-icon {
          color: rgb(227, 20, 54);
        }
      }
      .b-img {
        width: 118px;
        height: 118px;
      }
      .m-img {
        width: 33px;
        height: 33px;
      }
      .s-img {
        width: 11px;
        height: 11px;
      }
    }
  }
}
</style>