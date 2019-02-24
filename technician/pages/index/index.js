//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabStu:'progress',
    order:{
      progressList:[
        {
          title: 'KW00-SZ-000-000-00-0001',
          zhanting: '深圳香蜜湖红星美凯龙衣柜展厅',
          orderNo: 'KW00-SZ-000-000-00-0001',
          mingpaihao: '00001',
          name: '王先生',
          tel1: '13911111111',
          tel2: '13922222222',
          address: '深圳市福田区深南大道123号201室',
          date: '2019-2-22',
          status: 1
        }
      ],
      doneList: [
        {
          title: 'KW00-SZ-000-000-00-0001',
          zhanting: '深圳香蜜湖红星美凯龙衣柜展厅',
          orderNo: 'KW00-SZ-000-000-00-0001',
          mingpaihao: '00001',
          name: '王先生',
          tel1: '13911111111',
          tel2: '13922222222',
          address: '深圳市福田区深南大道123号201室',
          date: '2019-2-22',
          status: 2
        }
      ],
      repairList: [
        {
          title: 'KW00-SZ-000-000-00-0001',
          zhanting: '深圳香蜜湖红星美凯龙衣柜展厅',
          orderNo: 'KW00-SZ-000-000-00-0001',
          mingpaihao: '00001',
          name: '王先生',
          tel1: '13911111111',
          tel2: '13922222222',
          address: '深圳市福田区深南大道123号201室',
          date: '2019-2-22',
          status: 3
        }
      ]
    },
    
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  tabClick(e){
    this.setData({
      tabStu:e.target.dataset.name
    })
  },
  onLoad: function() {
    // wx.hideTabBar()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onSearch(e) {
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + e.detail
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  goIndex: function() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  goRepair: function() {
    wx.switchTab({
      url: '/pages/repair/repair',
    })
  }
})