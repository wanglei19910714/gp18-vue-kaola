<template>
  <div class="home-page">
    <Ad></Ad>
    <header>
      <div class="input-wrapper">
        <van-icon name="search" color="#f00" size="15" class="my-icon"/>
        <input type="text" placeholder="象印保温杯">
      </div>
      <div class="btn">登录/注册</div>
    </header>

 
  
  </div>
</template>
<script>
import Ad from "../../components/Ad";
 
export default {
  components: {
    Ad
  }
};
</script>
 
<style lang="scss" scoped>
.home-page {
  header {
     height: 45px;
     padding: 0 16px 0 6px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     .input-wrapper{
       display: flex;
       align-items: center;
       width: 268px;
       height: 30px;
       border-radius: 30px;
       border: 2px solid #f00;
       .my-icon{
         padding-left: 10px;
         font-weight: 800;
       }
       input{
         flex: 0.9;
         border:0;
         height: 30px;
         font-size: 13px;
         color: #727273;
       }
     }
     .btn{
       width: 62px;
       height: 30px;
       font-size: 12px;
       border: 1px solid #f00;
       color: #f00;
        text-align: center;
       line-height: 30px;
       border-radius: 3px;
  }
  }
}

.test{
  width: 300px;
  background: red;
  /deep/.van-icon{
    color: red;
    font-weight: 800;
  }
}
</style>