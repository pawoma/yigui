// pages/order/order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myName: app.globalData.myName,
    myAddress: app.globalData.myAddress,

    listArr:[
      { order_no: "KW00-SZ-000-000-00-0001",
        store:"深圳香蜜湖红星美凯龙衣柜展厅",
        mingpai_no:"00001",
        real_name:"王先生",
        mobile1:"13911111111",
        mobile2: "13922222222",
        address:"深圳市福田区深南大道123号201室",
        date:"星期四，十月18日，2018"
      },
      {
        order_no: "KW00-SZ-000-000-00-0001",
        store: "深圳香蜜湖红星美凯龙衣柜展厅",
        mingpai_no: "00001",
        real_name: "王先生",
        mobile1: "13911111111",
        mobile2: "13922222222",
        address: "深圳市福田区深南大道123号201室",
        date: "星期四，十月18日，2018"
      },
      {
        order_no: "KW00-SZ-000-000-00-0001",
        store: "深圳香蜜湖红星美凯龙衣柜展厅",
        mingpai_no: "00001",
        real_name: "王先生",
        mobile1: "13911111111",
        mobile2: "13922222222",
        address: "深圳市福田区深南大道123号201室",
        date: "星期四，十月18日，2018"
      },
      {
        order_no: "KW00-SZ-000-000-00-0001",
        store: "深圳香蜜湖红星美凯龙衣柜展厅",
        mingpai_no: "00001",
        real_name: "王先生",
        mobile1: "13911111111",
        mobile2: "13922222222",
        address: "深圳市福田区深南大道123号201室",
        date: "星期四，十月18日，2018"
      }
    ],
    r1: true,
    r2: true,
    l1: false,
    l2: false,
    background: '#d1c4e0',//#54c3f1#c0dd98
    color:'#231815',//#fff
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  installing: function () {
    this.setData({
      background: '#d1c4e0',
      color: '#231815',
      r1: true,
      r2: true,
      l1: false,
      l2: false,
    })
  },
  complete: function () {
    this.setData({
      background: '#54c3f1',
      color: '#fff',
      r1: false,
      r2: true,
      l1: true,
      l2: false,
    })
  },
  signfor:function(){
    this.setData({
      background: '#c0dd98',
      color: '#231815',
      r1: false,
      r2: false,
      l1: true,
      l2: true,
    })
  },
  editProgress(e){
    wx.navigateTo({
      url: '/pages/editProgress/unfinished/unfinished',
    })
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

  }
})