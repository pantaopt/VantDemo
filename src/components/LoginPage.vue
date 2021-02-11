<template>
  <div class="container">
    <van-form>
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
        placeholder="密码"
        required
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button block type="primary" native-type="submit" @click="onSubmit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      onSubmit(values) {
        if (this.username.length <= 0) {
          this.$toast("用户名不能为空");
          return false;  
        } 
        if (this. password.length <= 0) {
          this.$toast("密码不能为空");
          return false;  
        }    
        
        axios.get('https://www.baidu.com').then(function(res) {
          this.$toast(res)
        }) 
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #1f3134;
  padding-top: 10px;
  width: calc(100vw);
  height: calc(100vh);
  background: url("../assets/壁纸.jpg") no-repeat
}
.submit {
  margin-top: 15px;
}
</style>