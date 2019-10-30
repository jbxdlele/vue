<template>
  <div class="movie">
    <!-- 1 -->
    <div class="yi">
      <van-nav-bar title="猫眼电影"></van-nav-bar>
    </div>
    <!-- 2 -->
    <div class="download-header row">
      <!-- logo -->
      <div class="logo-img col-10" @click="$router.push('/download')"></div>
      <!-- 文字 -->
      <div class="col">
        <p class="maoyan">猫眼</p>
        <p class="jiangli">0元看电影，天天领现金</p>
      </div>

      <div class="info-wrapper col-30">
        <!-- 文字+gif -->
        <!-- 点击跳转下载页面 -->
        <div class="link-btn" @click="$router.push('/download')">立即领取</div>
      </div>
    </div>

    <!-- 3 -->
    <!-- <van-tabs v-model="active" animated>
      <van-tab v-for="(item,index) in ['正在热映','即将上映']" :key="index" :title="item"></van-tab>
    </van-tabs>-->
    <div class="content">
      <van-tabs>
        <!-- 3.1 -->
        <van-tab title="正在热映" @click="gethit()">
          <div v-for="(item,index) in hit" :key="index" class="row">
            <div class="col-20 img">
              <!-- 封面 -->
              <img :src="wh1[index]" alt />
            </div>
            <div class="col info">
              <div class="title1">
                <!-- 名称 -->
                {{hit[index].nm}}
              </div>
              <div>
                <span class="pf1">
                  <!-- 评分 -->
                  观众评
                </span>
                <span class="pf2">{{hit[index].sc}}</span>
              </div>

              <div class="zy">
                <!-- 主演 -->
                主演:{{hit[index].star}}
              </div>
              <div class="fy">
                <!-- 放映次数 -->
                {{hit[index].showInfo}}
              </div>
            </div>
            <div class="col-20">
              <div class="zhanwei"></div>
              <div class="zhanwei"></div>
              <div class="btn1" v-if="hit[index].showst==3">
                <span>购票</span>
              </div>
              <div class="ys" v-if="hit[index].showst==4">
                <span>预售</span>
              </div>
            </div>
          </div>
        </van-tab>
        <!-- 3.2 -->
        <van-tab title="即将上映" @click="getrelease()">
          <div v-for="(item,index) in release" :key="index">
            <!-- 列1 -->
            <p class="date">
              <!-- 日期 -->
              {{release[index].comingTitle}}
            </p>

            <!-- 列2 -->
            <div class="row">
              <div class="col-20 img">
                <!-- 封面 -->
                <img :src="wh2[index]" alt />
              </div>

              <div class="col info">
                <!-- 名称 -->
                <div class="name">{{release[index].nm}}</div>

                <!-- 想看人数 -->
                <div>
                  <span class="xk1">{{release[index].wish}}</span>
                  <span class="xk2">人想看</span>
                </div>

                <!-- 演员 -->
                <div class="zy">
                  <span>主演：{{release[index].star}}</span>
                </div>

                <!-- 上映日期 -->
                <div class="fy">
                  <span>{{release[index].rt}}上映</span>
                </div>
              </div>

              <div class="col-20">
                <div class="zhanwei"></div>
                <div class="zhanwei"></div>
                <div class="btn2 t-c" v-if="release[index].showst==1">
                  <span>想看</span>
                </div>
                <div class="ys" v-if="release[index].showst==4">
                  <span>预售</span>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hit: [],
      release: [],
      wh1: [],
      wh2: []
    };
  },
  created() {
    this.gethit();
    this.getrelease();
  },

  methods: {
    // onClick(name, title) {
    //   this.$toast(title);
    // }

    gethit() {
      this.$http({
        url: `/ajax/movieOnInfoList?token=`,
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(res => {
        console.log(res);
        this.hit = res.data.movieList;
        for (var i = 0; i < this.hit.length; i++) {
          this.wh1.push(this.hit[i].img.replace("w.h", "128.100"));
        }
      });
    },
    getrelease() {
      this.$http.get(`/ajax/comingList?ci=73&token=&limit=10`).then(res => {
        console.log(res);
        this.release = res.data.coming;
        for (var i = 0; i < this.release.length; i++) {
          this.wh2.push(this.release[i].img.replace("w.h", "128.100"));
        }
      });
    }
  }
};
</script>

<style scoped>
.maoyan {
  font-size: 15px;
  color: #333;
  line-height: 23px;
  margin-bottom: 1px;
  font-weight: 600;
}
.jiangli {
  font-size: 11px;
  color: #666;
  letter-spacing: 0;
}
/* 1 */
.van-nav-bar__title {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
}
.van-nav-bar {
  background-color: #e54847;
  height: 50.5px;
  line-height: 50.5px;
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
  background: url(http://p0.meituan.net/moviemachine/08d3ecf9c6fa9964c85d1f23b8d8fcb87541.png)
    no-repeat;
  background-size: contain;
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
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-width: 96px;
  height: 42px;
  margin-right: 6px;
  border-radius: 22px;
  background: #f03d37;
  color: #fff;
  font-size: 13px;
}

.download-header .link-btn:after {
  content: "";
  width: 19px;
  height: 19px;
  margin-left: 5px;
  background: url(http://p0.meituan.net/moviemachine/89857785f50685578fa61e1883251da95640.png)
    no-repeat;
  background-size: contain;
  animation: changeScale 3s ease-in-out infinite;
}
/* 3 */
.content .van-tabs__content {
  overflow-y: auto;
  position: absolute;
}
.img {
  margin: 8px;
}

.info {
  margin: 15px;
}
/* 热映 */
/* 电影名称 */
.title1 {
  font-size: 17px;
  color: #333;
  font-weight: 700;
  padding-right: 5px;
  flex-shrink: 1;
}
/* 评分 */
.pf1 {
  font-size: 13px;
  color: #666;
}
.pf2 {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
/* 主演 */
.zy {
  font-size: 13px;
  color: #666;
}
/* 放映次数 */
.fy {
  font-size: 13px;
  color: #666;
}
.btn1 {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
}
.zhanwei {
  height: 20px;
}
.ys {
  background-color: #3c9fe6;
  color: #fff;
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
}
.btn2 {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #faaf00;
  border: none;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
}

.btn span {
  top: 50px;
}

/* 上映 */
.date {
  padding: 12px 15px 0;
  margin: 0;
  font-size: 14px;
  color: #333;
}

/* 二 */
/* 影片名 */
.name {
  font-size: 17px;
  color: #333;
  font-weight: 700;
  padding-right: 5px;
  flex-shrink: 1;
}
/* 想看人数 */
.xk1 {
  color: #faaf00;
  font-size: 15px;
  font-weight: 600;
}

.xk2 {
  font-size: 13px;
  margin-left: 2px;
  display: inline-block;
  color: #666;
}
</style>

