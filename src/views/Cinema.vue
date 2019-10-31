<template>
  <div>
    <div class="header">
      <h1 class="title">影城</h1>
    </div>

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
    // 获取影城信息
    getlist() {
      this.$http
        .get(
          // `/ajax/cinemaList?day=2019-10-26&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1572084469803&cityId=73`
          "http://127.0.0.1:8000/maoyan/cinemaList"
        )
        .then(res => {
          console.log(res);
          this.items = res.data.cinemas;
        });
    }
  }
};
</script>

<style >
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