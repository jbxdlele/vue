<template>
  <div>
    用户:
    <input type="text" name="uname" v-model="user.name" />
    <br />密码:
    <input type="password" name="pwd" v-model="user.pwd" />
    <br />
    <button @click="login()">登录</button>
  </div>
</template>
<script>
import bus from '../../bus.js'
export default {
  data() {
    return {
      user: { name: "", pwd: "" }
    };
  },
  methods: {
    login() {
      this.$http({
        url: "http://www.520mg.com/member/index_login.php",
        // 非同源 允许本地cookie 上传到服务器
        withCredentials: true,
        // 数据上传方式用POST
        method: "POST",
        data: `fmdo=login&dopost=login&userid=${this.user.name}&pwd=${this.user.pwd}`
      }).then(res => {
        console.log(res.data);
        if (res.data.status) {
          // bus.isLog = true;
          bus.setLog(true);
          if (this.$route.query.redirect) {
            this.$router.push(this.$route.query.redirect);
          } else {
            this.$router.push("/home");
          }
          // 登录成功 跳转回去
          //  存储cooke 保持登录状态（是否登录成功）
          //  bus的isLog 改为true
          // 获取到 $route.query.redirect redirect
          //  没有获取到跳转到首页
        } else {
          alert(res.data.msg);
          // 弹出是不信息
        }
      });
    }
  }
};
</script>