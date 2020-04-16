<template>
  <div class="index-container">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <ul>
        <router-link tag="li" to="/index/home">
          <img :src="`/img/footer/${footerImg.home}`" alt @click="handleClick('home')" />
        </router-link>
        <router-link tag="li" to="/index/category">
          <img :src="`/img/footer/${footerImg.category}`" alt @click="handleClick('category')" />
        </router-link>
        <router-link tag="li" to="/index/shop">
          <img :src="`/img/footer/${footerImg.shop}`" alt @click="handleClick('shop')" />
        </router-link>
        <router-link tag="li" to="/index/profile">
          <img :src="`/img/footer/${footerImg.profile}`" alt @click="handleClick('profile')" />
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerImg: {
        home: "home.active.png",
        category: "category.png",
        shop: "shop.png",
        profile: "profile.png"
      }
    };
  },
  methods: {
    handleClick(flag) {
      for (let name in this.footerImg) {
        if (name == flag) {
          this.footerImg[name] = `${name}.active.png`;
        } else {
          this.footerImg[name] = `${name}.png`;
        }
      }

      console.log(this.footerImg);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/style/mixin.scss';

.index-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: auto;
  }
  footer {
    height: 49px;
    @include border_1px('top');
    ul{
       display: flex;
       justify-content: space-evenly;
    }
    img{
      width: 48px;
      height: 49px;
    }
  }
}
</style>
 
 