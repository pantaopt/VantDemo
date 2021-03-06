<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <div class="menu" @click="showPopup">菜单</div>
    <van-popup
      v-model="popShow"
      position="left"
      :style="{ background: '#2e2930' }"
      class="pop"
      closeable
      close-icon-position="top-left"
    >
      <div class="popItem" @click="logout">退出</div>
    </van-popup>
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

export default {
  name: "App",
  components: {
    LoginPage,
    HomePage,
  },
  data() {
    return {
      transitionName: "slide-left",
      popShow: false,
    };
  },
  watch: {
    $route(to, from) {
      const toLength = to.fullPath.split("/").length; // 路由层级高向层级低动画返回，低到高前进
      const fromlength = from.fullPath.split("/").length;
      if (from.meta.keepAlive) {
        // 有缓存界面添加滚动距离参数
        from.meta.scrollTop = document.getElementsByClassName(
          "view-router"
        )[0].scrollTop;
      }
      if (from.fullPath === "/login") {
        // 离开登录页，以类iOS的dismiss收起
        this.transitionName = "slide-dismiss";
      } else if (to.fullPath === "/login") {
        // 进入登录页，以类iOS的present弹起
        this.transitionName = "slide-present";
      } else if (toLength < fromlength) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      // console.log("[watch]to.fullPath: "+to.fullPath);
      // console.log("[watch]from.fullPath: "+from.fullPath);
      // console.log("[watch]this.transitionName: "+this.transitionName);
    },
  },
  methods: {
    showPopup() {
      this.popShow = true;
    },
    logout() {
      this.popShow = false;
      this.$dialog.confirm({
        title: "提醒",
        message: "确定要退出吗？",
      })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-present-enter-active,
.slide-present-leave-active,
.slide-dismiss-enter-active,
.slide-dismiss-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  position: absolute;
  transition: all 350ms;
}
.slide-right-enter {
  transform: translate3d(100%, 0, 0);
  opacity: 1;
}
.slide-right-leave-to {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
.slide-left-enter {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translate3d(100%, 0, 0);
  opacity: 1;
}
.slide-dismiss-enter {
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}
.slide-dismiss-leave-to {
  transform: translate3d(0, 100%, 0);
  opacity: 1;
}
.slide-present-enter {
  transform: translate3d(0, 100%, 0);
  opacity: 1;
}
.slide-present-leave-to {
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}
.menu {
  position: fixed;
  top: 5px;
  left: 10px;
  width: 50px;
  height: 40px;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  border-radius: 10px;
  background: blue;
}
.pop {
  width: 150px;
  height: calc(100vh);
}
.popItem {
  color: white;
  font-size: 14px;
  text-align: center;
  height: 45px;
  line-height: 45px;
}
</style>