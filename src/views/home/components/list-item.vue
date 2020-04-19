<template>
  <li class="item">
    <img
      :src="item.imageUrl"
      alt
    />
    <div class="text">
      <p class="title">{{item.title}}</p>
      <span class="price">¥{{item.currentPrice}}</span>
    </div>
  </li>
</template>
<script>
export default {
    props:['item']
}
</script>
<style lang="scss" scoped>
.item {
  width: 170px;
  height: 247px;
  margin: 5px;
  background: #fff;
  img {
    width: 170px;
    height: 170px;
  }
  .text {
    margin: 0 8px;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;

     font-size: 14px;
     color: #333;
     margin: 5px 0;
     line-height: 20px;
    }
    .price{
        font-size: 17px;
        color: #FF0000;
        font-weight: 600;
    }
  }
}
</style>