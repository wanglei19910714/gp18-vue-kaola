<template>
    <ul class="mainlist" ref="mainlist">
        <li class="mainitem" v-for="mainitem in currentCategory" :key="mainitem.categoryId">
            <div class="title">
              {{mainitem.categoryName}}
            </div>
              <ul class="sublist">
                    <li class="subitem" v-for="item in mainitem.childrenNodeList" :key="item.categoryId">
                        <img :src="item.appIcon" alt="">
                        <p>{{item.categoryName}}</p>
                    </li>
                     
            </ul>
        </li>
    </ul>
</template>
<script>
export default {
    props:['currentCategory']
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.mainlist{
  padding: 10px 10px 10px 0;
  .mainitem{
      padding-bottom: 7px;
      @include border_1px('bottom',#ccc);
      .title{
          line-height: 30px;
          color: #333;
          font-size: 8px;
          padding-left: 15px;
          margin-bottom: 8px;
          font-weight: 500;
      }
      .sublist{
          padding-left: 12px;
          display: flex;
          flex-wrap: wrap;
          .subitem{
              width: 33.33%;
              height: 108px;
              text-align: center;
              img{
                  width: 76px;
                  height: 76px;
              }
              p{
                  font-size: 12px;
                  color: #1E1E1E;
              }
          }
      }
  }
  
}
</style>