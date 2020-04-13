<template>
  <div class="ad-page">
      <img src="https://kaola-haitao.oss.kaolacdn.com/6d992b97-babe-4e4a-b029-c28540128d4aT1909171411_180_180.png?x-oss-process=image/resize,m_fill,w_80,h_80/quality,q_85" alt="">
     <div class="desc">
			<p>新人送168元购物礼包</p>
			<p>下载考拉APP领取</p>
		</div>
    <div class="btn">下载领取</div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/style/mixin.scss';
.ad-page{
  height: 60px;
  display: flex;
  align-items: center;
  @include border_1px('bottom');
  img{
    width: 40px;
    height: 40px;
    margin: 0 9px 0 12px;
    border:1px solid rgb(248, 247, 247);
    border-radius: 5px;
  }
  .desc{
    flex: 1;
    p:nth-of-type(1){
      color: #333;
      font-size: 14px;
    }
     p:nth-of-type(2){
      color: #999;
      font-size: 12px;
    }
  }
  .btn{
    width: 94px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 16px;
    background: #ff3162;
  }
}
</style>