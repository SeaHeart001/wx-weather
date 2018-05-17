var util = require('../../utils/util.js')
var mApp = getApp()
//console.log(mApp)
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    //将获取的数据保存到data数据
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var self = this;
    util.getWeather(mApp.cityXy, (md)=>{
     // console.log(md)
      //将获取的数据保存到data数据md——>wData
      this.setData({md})//结构赋值，data中存进了一个对象｛md：md｝
    }); 
    //接收参数 
   
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
  
})