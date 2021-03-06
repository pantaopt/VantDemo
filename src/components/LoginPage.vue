<template>
  <div class="container">
    <!-- <van-form> -->
    <van-field
      v-model="username"
      name="请填写用户名"
      label="用户名"
      placeholder="请填写用户名"
      required
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="请输入密码"
      required
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px">
      <van-button block type="primary" native-type="submit" @click="onSubmit">
        提交
        <van-loading
          type="spinner"
          class="loading"
          v-bind:style="{ display: loadingDisplay }"
        />
      </van-button>
    </div>
    <!-- </van-form> -->
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      loadingDisplay: "none",
    };
  },
  methods: {
    onSubmit(values) {
      if (this.username.length <= 0) {
        this.$toast("用户名不能为空");
        return false;
      }
      if (this.password.length <= 0) {
        this.$toast("密码不能为空");
        return false;
      }
      this.loadingDisplay = "block";

      let self = this;

      var params = { id: self.password, nick: self.username };
      self
        .$axios({
          method: "post",
          url: "/account/autologin",
          data: params,
          header: {
            "Content-Type": "application/json",
          },
        })
        .then(function (res) {
          self.$toast("成功登录");
          self.loadingDisplay = "none";
          console.log(self.$router);
          
          let userInfo = JSON.stringify(res.data);
          localStorage.setItem("userInfo", userInfo);
          
          self.$router.push({ path: '/home' });
          return true;
        })
        .catch(function (error) {
          console.log(error);
          console.log("error: " + error.message);
          self.$toast(error.message);
          self.loadingDisplay = "none";
          return false;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #1f3134;
  padding-top: 50px;
  width: calc(100vw);
  height: calc(100vh);
  background: url("../assets/background.jpeg") no-repeat;
  background-size: 100% 100%;
}
.loading {
  position: absolute;
  right: 10px;
  top: 5px;
  display: block;
}
</style>