<template>
  <div class="container">
    <van-swipe :autoplay="3000" class="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
        'https://img01.yzcdn.cn/vant/apple-3.jpg',
      ]
    };
  },
  beforeCreate: function() {
    let userInfo = localStorage.getItem("userInfo");
    console.log("userInfo: "+userInfo);
    if (userInfo == null) {
      this.$router.push({ path: '/login' });
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #2e2930;
  padding-top: 50px;
  width: calc(100vw);
  height: calc(100vh);
}
.swipe {
  height: 200px;
}
.image {
  width: 100%;
  height: 100%
}
</style>