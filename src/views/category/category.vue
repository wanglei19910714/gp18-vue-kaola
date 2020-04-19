<template>
  <div class="category-page">
    <div class="scroll-sidebar-wrapper">
      <div class="sidebar">
        <SidebarItem
          v-for="item in sidebarList"
          :key="item.categoryId"
          :item="item"
          :currentCategoryId="currentCategoryId"
          @click.native="handleClick(item.categoryId)"
        ></SidebarItem>
      </div>
    </div>

    <div class="main scroll-main-wrapper">
      <MainItem :currentCategory="currentCategory"></MainItem>
    </div>
  </div>
</template>
<script>
import SidebarItem from "./components/sidebarItem";
import MainItem from "./components/mainItem";

import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);


export default {
  components: {
    SidebarItem,
    MainItem
  },
  data() {
    return {
      dataList: [],
      currentCategoryId: 0,
      
    };
  },
  computed: {
    sidebarList() {
      let rs = [];
      this.dataList.forEach(item => {
        rs.push({
          categoryId: item.categoryId,
          categoryName: item.categoryName
        });
      });
      return rs;
    },
    currentCategory(){
     
        let rs = [];
       this.dataList.forEach(item => {
        if (item.categoryId == this.currentCategoryId) {
          rs= item.childrenNodeList;
        }
      });
      return rs;
    }
  },
  async created() {
    let rs = await this.$http.get("/api/category/dataList");
    this.dataList = rs.data.dataList;

    this.currentCategoryId = this.dataList[0].categoryId

    this.$nextTick(()=>{
     this.initBscroll()
    })
  },
  methods: {
    handleClick(id) {
      console.log(111);
      
      this.currentCategoryId = id;
      
       this.mainBscroll.scrollTo(0,0)
    },

    initBscroll() {
      this.sidebarBscroll = new BScroll('.scroll-sidebar-wrapper', {
        click:true,
        scrollY: true,
        pullUpLoad: true,
        probeType: 2,
         mouseWheel:true
      
      });
      
       this.mainBscroll = new BScroll('.scroll-main-wrapper', {
         click:true,
        scrollY: true,
        pullUpLoad: true,
        probeType: 2,
        mouseWheel:true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.category-page {
  height: 100%;
  display: flex;
  .sidebar {
    width: 100px;
   
    @include border_1px("right", rgb(199, 193, 193));
  }
  .main {
    flex: 1;
  }
}
</style>
 
