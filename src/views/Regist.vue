<template>
  <div class="regist">
    <div class="title">
      <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />
    </div>

    <input type="text" placeholder="请输入用户名" v-model="user.userid" />
    <input type="text" placeholder="请输入您的邮箱账号" v-model="user.email" />
    <input type="password" placeholder="请输入您的密码" v-model="user.userpwd" />

    <button class="btn" @click="regist()">注册</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: { userid: "", email: "", userpwd: "" }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    regist() {
      this.$http({
        url: "http://www.520mg.com/member/reg_new2.php",
        method: "POST",
        withCredentials: true,
        data: `userid=${this.user.userid}&userpwd=${this.user.userpwd}&email=${this.user.email}`
      }).then(res => {
        if (res.data.status) {
          alert("注册成功！");
          this.$router.push("/home");
        } else {
          alert(res.data.msg);
        }
      });
    }
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
</style>