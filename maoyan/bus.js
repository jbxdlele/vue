import Vue from 'vue';
import Cookies from 'js-cookie';
var bus = new Vue();

// 默认是未登录状态
bus.isLog = false;

// 保存ck
bus.setLog = function (val) {
    bus.isLog = val;
    Cookies.set('isLog', val)
}

// 获取ck
bus.getLog = function () {
    // 判断状态 返回布尔值
    if (bus.isLog) {
        return bus.isLog
    } else {
        return Cookies.get('isLog')
    }
}

export default bus;