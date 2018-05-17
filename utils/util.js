
function getWeather(cityXy, callback){
  
  var weatherApi = "https://free-api.heweather.com/s6/weather?key=37d86dc3ed384dbcaf60e43684c223c2&location="+cityXy
  wx.request({
    url: weatherApi,
    success: function (res) {
      //console.log(res.data)
      var resData = res.data.HeWeather6[0];
      //console.log(resData)
      var wData = {
        status: 'error'
      }
      if (resData.status =='ok'){
        wData = {
          status: 'ok',
          city: resData.basic.location,
          newDAY: fomateDate(),
          newTime: resData.update.loc.slice(-5),
          tmp: resData.now.tmp,
          condTxt: resData.now.cond_txt,
          suggest: resData.lifestyle
        }
      }
      callback&&callback(wData)
    }
  })
}

var weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六',]
function fomateDate(){
  var date = new Date()
  var m = date.getMonth()+1;
  var d = date.getDate();
  var w = date.getDay();
  return m+'月'+d+'日 '+weekArr[w]
}
module.exports = {
  getWeather: getWeather
}


