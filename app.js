//app.js
var util = require('./utils/util.js')
App({
  
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var self = this;
    //console.log(self)
    wx.getLocation({//wxApi获取用户地理信息
      success: function(res) {
        //console.log(res,res.latitude,res.longitude)
        //根据坐标获取地理位置(也不需要，现在经纬度也可以当参数直接使用天气api，可以直接访问到当地城市名)
        self.cityXy = res.latitude+","+ res.longitude
        //console.log(cityXy) 
      },
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  cityXy: '30.5843544,114.29856873'
})
