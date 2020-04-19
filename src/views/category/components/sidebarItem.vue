<template>
    <div class="item">
       <p :class="{active:item.categoryId==currentCategoryId}">{{item.categoryName}}</p>
    </div>
</template>
<script>
export default {
    props:['item','currentCategoryId'],
   
}
</script>
<style lang="scss" scoped>
.item{
    width: 100px;
    height: 50px;
  
  
    
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        color: #666;
        font-size: 14px;
         padding: 2.5px 7px;
        line-height: 21px;
        border-radius: 21px;
    }
    .active{
         color: #fff;
         background: #ff3264;
    }
    
}
</style>