<template>
  <div>
    <van-nav-bar title="提示" left-arrow @click-left="onClickLeft" />

    <div class="centons">
      <h1>你的页面丢失了！</h1>
    </div>

    <!-- <button @click="$router.go(-1)">返回上一页面</button> -->
    <!-- replace 不留历史记录 -->
    <!-- <button @click="$router.replace('/')">返回首页</button>  -->
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style >
.contens {
  height: 100%;
  align-content: center;
}
h1 {
  text-align: center;
}
</style>