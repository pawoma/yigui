// pages/person/person.js
var app = getApp()
console.log(app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: app.globalData.myName,
    tel: app.globalData.myTel
  },

})