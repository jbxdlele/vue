<template>
  <div class="start">
    <div class="text">娱乐看猫眼</div>
    <div class="bottom">
      <div class="icon"></div>
      <p class="title">{{ title }}</p>
      <p class="copyright">@maoyan.com 美团云提供技术服务</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {
      title: "猫眼电影"
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/home");
    }, 3000);
  }
};
</script>
<style scoped>
.start{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: -128px;
}
.text {
  color:red;
  width: 70px;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
}

.bottom {
  position: absolute;
  bottom: 10px;
  line-height: 20px;
}
.icon {
  background-image:url("../assets/logo.png");
  width: 50px;
  height: 50px;
  background-size: 50px 50px;
  margin: 10px auto;
}
.title {
  color: red;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 6px;
  text-align: center;
}
.copyrightP {
  color:RGB(102,102,102);
  font-size: 12px;
}
</style>