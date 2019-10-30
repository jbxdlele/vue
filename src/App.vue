<template>
  <div id="app" class="full">
    <div class="content full" :class="{'has-footer':showTab}">
      <keep-alive>
        <router-view v-if="$route.meta.keep" />
      </keep-alive>

      <router-view v-if="!$route.meta.keep" />
    </div>

    <div class="tabs footer tac row dd">
      <router-link to='/home' class="col ihome"><span></span>电影</router-link>
      <router-link to='/cinema' class="col icinema"><span></span>影城</router-link>
      <router-link to='/user' class="col iuser" ><span></span>我的</router-link>
    </div>

  </div>
</template>
<script>
import bus from "../bus.js";
export default {
created() {
    bus.$on("tabevent",(data)=>{
      console.log("tabevent",data);
       this.showTab = data;
    })
  },
  data(){return {
    showTab:true,
  }}
};
</script>
<style lang="less">

// 底部栏图标
.footer span{
  display: block;
  width: 22px;
  height: 22px;
  margin-left: auto;
  margin-right: auto;
  // background-image: url(./assets/user.svg);
  background-size: cover;
  margin-top: 5px;
  margin-bottom: 3px;
}
.footer .ihome span{
   background-image: url(./assets/home.svg);
}
.footer .icinema span{
   background-image: url(./assets/cinema.svg);
}
.footer .iuser span{
   background-image: url(./assets/user.svg);
}
.router-link-exact-active{color:#f30;}
.ihome.router-link-exact-active span{
background-image: url(./assets/home-h.svg);
}
.icat.router-link-exact-active span{
background-image: url(./assets/cinema-h.svg);
}



// 1.重置 
*{
  // 清除内外边距  *指任何元素
  margin: 0; 
  padding: 0;
  overflow-y: auto;
  box-sizing: border-box;
  // 
}
// 2. 继承
body{
  color: #777;
}
h1,h2,h3,h4,h5,h6{
  font-weight: normal;
  color: #333;
}

a{
  //改变a标签的颜色 灰色
  color: #777;
  // 去掉下划线
  text-decoration: none;
}
a:hover{
  // 改变鼠标放上去的颜色为红色
  color: #f30;
}
img{
  border: 0;
  // 图片垂直居中对齐
  vertical-align: middle;
}

// 3.共用的功能

// 文字居中
.tac{text-align: center;}

// 文字右对齐
.tar{text-align: right;}

// 文字左对齐
.tal{text-align: left;}

// 清除浮动
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}

.clear{
  // 左右两边都不允许出现浮动元素
  clear: both;
}

.l{
  // 从左开始水平排列
  float: left;
}
.r{
  // 从右开始水平排列
  float:right;
}


// 定位基准元素
.full{
  // 绝对定位
  position: absolute;
  
  // 默认值为0 可以省略单位
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.has-footer{
  bottom: 49px;
}

// 页脚
.footer{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  
}

// 4.栅格系统

// 行弹性布局
.row{
  display: flex;
}

// 列
.col{
  // 平均分行
  flex: 1;
}

.col-10{
  flex-basis: 10%;
  width: 10%;
  max-width: 10%;
}
.col-20{
  flex-basis: 20%;
  width: 20%;
  max-width: 20%;
}

.col-25{
  flex-basis: 25%;
  width: 25%;
  max-width: 25%;
}

.col-30{
  flex-basis: 30%;
  width: 30%;
  max-width: 30%;
}

.col-33{
  flex-basis: 33.33%;
  width: 33.33%;
  max-width: 33.33%;
}

.col-40{
  flex-basis: 40%;
  width: 40%;
  max-width: 40%;
}
.col-50{
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
}
.col-60{
  flex-basis: 60%;
  width: 60%;
  max-width: 60%;
}
.col-67{
  flex-basis: 66.67%;
  width: 66.67%;
  max-width: 66.67%;
}
.col-70{
  flex-basis: 70%;
  width: 70%;
  max-width: 70%;
}
.col-75{
  flex-basis:75%;
  width:75%;
  max-width: 75%; 
}
.col-80{
  flex-basis: 80%;
  width: 80%;
  max-width: 80%;
}
.col-90{
  flex-basis: 90%;
  width: 90%;
  max-width: 90%;
}

</style>
