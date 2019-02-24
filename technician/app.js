//app.js
App({
  onLaunch: function() {
    // wx.hideTabBar()
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    myName: "李先生",
    myTel:'13814082906',
    myAddress: "深圳市福田区深南大道123号201室",
  },
  repairOrderList: [
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
    },
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
    }
  ],
  selectedRepairOrder: {
    status:true,
    title: 'KW00-SZ-000-000-00-0001',
    zhanting: '深圳香蜜湖红星美凯龙衣柜展厅',
    orderNo: 'KW00-SZ-000-000-00-0001',
    mingpaihao: '00001',
    name: '王先生',
    tel1: '13911111111',
    tel2: '13922222222',
    address: '深圳市福田区深南大道123号201室',
    date: '2019-2-22',
    repairList: [{
      date: '2019-03-10',
      content: '胜利大街福利卡电视剧里附近的萨拉俯拾地芥',
      imageList: ['/images/thum.jpg', '/images/thum.jpg', '/images/thum.jpg']
    }]
  }


})