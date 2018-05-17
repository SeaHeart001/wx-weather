// pages/citys/city.js
var util = require('../../utils/util.js')
var mApp = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getInput: function (e) {
    console.log(e)
    this.setData({ inputValue: e.detail.value })
    e.detail.value = ''
  },
  getValue: function () {
    //拿到输入框的地址
    var cityTxt = this.data.inputValue;
    //console.log(cityTxt)
    //清空输入框
    this.setData({ inputValue: ''})
    //发请求
    util.getWeather(cityTxt, (md) => {
      console.log(md)
      var MD = md
      //将获取的数据保存到data数据
      this.setData({md})
      wx.navigateTo({
        url: '/pages/page/page?cityTxt='+cityTxt
      })
    });  
  }
})