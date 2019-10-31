<template>
  <div class="movie">
    <div class="title">
      <van-nav-bar title="少年的你" left-arrow @click-left="onClickLeft" />
    </div>

    <div class="download-header row">
      <!-- logo -->
      <div class="logo-img col-10" @click="$router.push('/download')"></div>
      <!-- 文字 -->
      <div class="col">
        <p class="maoyan">猫眼</p>
        <p class="jiangli">在线选座，热门影讯，爱上看电影</p>
      </div>

      <div class="info-wrapper col-30">
        <!-- 文字+gif -->
        <!-- 点击跳转下载页面 -->
        <div class="link-btn" @click="$router.push('/download')">立即打开</div>
      </div>
    </div>

    <div class="row jianjie">
      <div class="col-40 img">
        <img src="//p0.meituan.net/148.208/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg" />
      </div>

      <div class="col-60">
        <div class="name1">少年的你</div>
        <div class="name2">Better Days</div>
        <div>
          <span class="pf1">9.5</span>

          <span class="pf2">(101.0万人评)</span>
        </div>
        <div class="info">
          <div>爱情,青春,剧情</div>
          <div>中国大陆/135分钟</div>
          <div>2019-10-25 09:00大陆上映</div>
        </div>
      </div>
    </div>

    <!-- 影城数据 -->
    <div class="cinema">
      <div class="divs" v-for="(item,index) in items" :key="index">
        <div class="a">
          <!-- 名称 -->
          <div class="name">
            <span>{{items[index].nm}}</span>
            <span class="price">
              <!-- 价格 -->
              {{items[index].sellPrice}}
            </span>
            <span class="q">元起</span>
          </div>
        </div>

        <div class="b">
          <div class="row">
            <!-- 地址 -->
            <div class="dizhi-80">
              <div class="van-ellipsis">{{items[index].addr}}</div>
            </div>
            <div class="dizhi-5"></div>
            <div class="row dizhi-15">
              <!-- 距离 -->
              {{items[index].distance}}
            </div>
          </div>
        </div>
        <!-- 标签 -->
        <div class="c">
          <!-- 退 -->
          <span v-if="items[index].tag.allowRefund==1" class="jianju">
            <van-tag plain type="primary">退</van-tag>
          </span>
          <!-- 改签 -->
          <span v-if="items[index].tag.endorse==1" class="jianju">
            <van-tag plain type="primary">改签</van-tag>
          </span>
          <!-- 小吃 -->
          <span v-if="items[index].tag.snack==1" class="jianju">
            <van-tag plain type="warning">小吃</van-tag>
          </span>
          <!-- 折扣卡 -->
          <span v-if="items[index].tag.vipTag" class="jianju">
            <van-tag plain type="warning">{{items[index].tag.vipTag}}</van-tag>
          </span>

          <span v-if="items[index].tag.hallType" class="jianju">
            <span v-for="i in items[index].tag.hallType" :key="i">
              <van-tag plain type="success">{{i}}</van-tag>
            </span>
          </span>

          <!-- {{items[index].tag.endorse}} 1 改签 -->
          <!-- {{items[index].tag.snack}} 1 小吃 -->
          <!-- {{items[index].tag.vipTag}} 内容 折扣卡 -->
          <!-- {{items[index].tag.allowRefund}} 1 退  -->
          <!-- {{items[index].tag.hallType}} 内容 -->
        </div>

        <!-- info -->
        <div class="d">
          <div class="tag2">
            <div v-if="items[index].promotion.platformActivityTag">
              <span class="jianju">
                <van-tag type="warning" size="medium">惠</van-tag>
              </span>
              <span class="tag2-t">{{items[index].promotion.platformActivityTag}}</span>
            </div>
            <div v-if="items[index].promotion.cardPromotionTag">
              <span class="jianju">
                <van-tag type="primary" size="medium">卡</van-tag>
              </span>
              <span class="tag2-t">{{items[index].promotion.cardPromotionTag}}</span>
            </div>
          </div>
        </div>
        <!-- <van-divider dashed></van-divider> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取影城数据
    getlist() {
      this.$http
        .get(
          "http://127.0.0.1:8000/maoyan/cinemaList"
          // `/ajax/cinemaList?day=2019-10-26&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1572084469803&cityId=73`
        )
        .then(res => {
          console.log(res);
          this.items = res.data.cinemas;
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
.download-header {
  background: #fff;
  height: 60px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  /* 居中 */
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
}
.info-wrapper {
  text-align: justify;
}
.download-header .logo-img {
  margin-left: 11px;
  margin-right: 6px;
  min-width: 42px;
  height: 42px;
  background: url(http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png)
    no-repeat;
  background-size: contain;
}
.maoyan {
  font-size: 17px;
  color: #222;
  line-height: 23px;
}
.jiangli {
  font-size: 12px;
  color: #999;
}
/* 2右图片 */
.topNav {
  height: 44px;
  line-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.topNav li {
  height: 100%;
  cursor: pointer;
}

.download-header .link-btn {
  display: flex;
  /* justify-content: center;
  align-items: center;
  margin-right: 6px; */
  /* border-radius: 22px; */
  background: #f03d37;
  color: #fff;
  font-size: 13px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding-left: 15px;
}

.jianjie {
  height: 188px;
  position: relative;
  cursor: pointer;
  padding: 19px 30px 19px 15px;
  background-color: #777777;
}
.img img {
  width: 110px;
  height: 150px;
  box-sizing: border-box;
}
.name1 {
  font-size: 20px;
  margin-top: 2px;
  font-weight: 700;
  overflow: hidden;
  color: #fff;
}
.name2 {
  margin-top: 10px;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
}
.pf1 {
  font-size: 18px;
  font-weight: 700;
  color: #fc0;
  margin-top: 11px;
}
.pf2 {
  margin-top: 10px;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
}
.info div {
  margin-top: 5px;
  font-size: 12px;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* opacity: .8; */
}

.jianju {
  margin-right: 5px;
}
.divs {
  /* background-color: #f0f0f0; */
  border-top: 10px solid #ffff;
  border-bottom: 10px solid #ffff;
  border-left: 10px solid #ffff;
  border-right: 10px solid #ffff;
  padding: 5px;
  border-radius: 20px;
  /* box-shadow: 0  3px  8px #ccc */
}

.d > .tag2 > .van-tag--medium {
  font-size: 2px;
}
.header {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.title {
  color: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  display: block;
  -webkit-box-flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.name {
  /* height: 23px; */
  line-height: 23px;
  font-size: 16px;
  color: #000;
}
.price {
  font-size: 18px;
  color: #f03d37;
}
.q {
  margin-left: 3px;
  font-size: 11px;
  color: #f03d37;
}
.dizhi-5 {
  width: 5%;
}
.dizhi-15 {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  width: 15%;
}
.dizhi-80 {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  width: 80%;
}
.tag2-t {
  margin-left: 0;
  font-size: 11px;
}
.tag2 {
  color: #999;
  /* margin-bottom: 4px; */
}
</style>