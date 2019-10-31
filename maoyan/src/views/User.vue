<template>
  <div class="user">
    <div class="title">
      <van-nav-bar title="个人中心" @click-left="onClickLeft" />
    </div>

    <van-tabs v-model="active">
      <van-tab title="美团账号登录">
        <input type="text" placeholder="账户名/手机号/Email" v-model="user.name" />
        <input type="password" placeholder="请输入您的密码" v-model="user.pwd" />
        <button class="btn" @click="login()">登录</button>
      </van-tab>
      <van-tab title="手机验证登录">
        <div>
          <input type="text" placeholder="请输入手机号" class="col-70" />
          <button class="col-30">获取验证码</button>
        </div>
        <input type="text" placeholder="请输入短信验证码" />
        <button class="btn">登录</button>
      </van-tab>
      <div class="er">
        <p class="l">
          <a href="/#/regist">立即注册</a>
        </p>

        <p class="r">
          <a href="/">找回密码</a>
        </p>
      </div>
      <div class="san">
        <span>
          © 猫眼电影 客服电话：
          </span>
          <a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a>
        
      </div>
    </van-tabs>

    <!-- 获取用户信息， -->
    <!-- <p v-if="user.M_UserName">
      用户名:{{user1.M_UserName}} -- 积分:{{user1.M_Scores}}
      <br />
      <button @click="logOut()">注销</button>
    </p>-->
  </div>
</template>
<script>
// import bus from "../../bus.js";
export default {
  data() {
    return {
      active:"",
      user1: {},
      user: { name: "", pwd: "" }
    };
  },
  created() {
    // this.getUser();
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },

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
        if (res.data.status == 1) {
          alert("登录成功！");
          this.$router.push("/home");

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
    // getUser() {
    //   this.$http({
    //     url: "http://www.520mg.com/member/ajax_login.php",
    //     method: "GET",
    //     withCredentials: true
    //   }).then(res => {
    //     console.log(res.data);
    //     this.user1 = res.data;
    //   });
    // },
    // // 注销
    // logOut() {
    //   this.$http({
    //     url: "http://www.520mg.com/member/index_login.php",
    //     method: "POST",
    //     withCredentials: true,
    //     data: "dopost=exit"
    //   }).then(res => {
    //     if (res.data.status) {
    //       // 重新给登录状态
    //       bus.setLog(false);
    //       // 用户信息清空
    //       this.user1 = {};
    //       // 跳转页面
    //       this.$router.push("/login?redirect=/user");
    //     }
    //   });
    // },
  }
};
</script>

<style scoped>
.title .van-nav-bar__title {
  color: #fff;
}
.title .van-nav-bar {
  background-color: #df2d2d;
}
input {
  width: 100%;
  margin-top: 10px;
}
.btn {
  margin: 0;
  text-align: center;
  /* height: .6rem; */
  display: block;
  width: 100%;
  color: #fff;
  background-color: #df2d2d;
  line-height: 30px;
}
a {
  font-family: PingFangSC-Regular;
  font-size: 0.26rem;
  color: #fe8c00;
}
.san {
  text-align: center;
}
.san span {
  font-size: 14px;
  color: #333;
  margin-top: 20px;
}
</style>
