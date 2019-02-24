// pages/visiteInstallation/visiteInstallation.js
const app = getApp()
var anzhuangList=[{
  date: "2019-01-10",
  name: "钱某某",
  completeState: 0,
  reason: '台面未到位，货到再安装'
}, {
    date: "2019-01-10",
    name: "钱某某",
    completeState: 1,
    reason: '台面未到位，货到再安装'
  }];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myName: app.globalData.myName,
    myAddress: app.globalData.myAddress,
    
    listArr: [
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
    anzhuangList: anzhuangList,
    bar1: true,
    bar2: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      order_no: "KW00-SZ-000-000-00-0001",
      store: "深圳香蜜湖红星美凯龙衣柜展厅",
      mingpai_no: "00001",
      real_name: "王先生",
      mobile1: "13911111111",
      mobile2: "13922222222",
      address: "深圳市福田区深南大道123号201室",
      date: "星期四，十月18日，2018",
      anzhuangList: anzhuangList
    })
  },
  goIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  goRepair: function () {
    wx.switchTab({
      url: '/pages/repair/repair',
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