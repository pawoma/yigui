// pages/repair/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bar1: false,
    bar2: true,
    orderDetail: {
      title: 'KW00-SZ-000-000-00-0001',
      zhanting: '深圳香蜜湖红星美凯龙衣柜展厅',
      orderNo: 'KW00-SZ-000-000-00-0001',
      mingpaihao: '00001',
      name: '王先生',
      tel1: '13911111111',
      tel2: '13922222222',
      address: '深圳市福田区深南大道123号201室',
      date: '星期四，十月18日，2018'
    },
    repairDetailList: [{
        date: '2019-03-10',
        content: '胜利大街福利卡电视剧里附近的萨拉俯拾地芥',
        imageList: ['/images/thum.jpg', '/images/thum.jpg', '/images/thum.jpg']
      },
      {
        date: '2019-03-10',
        content: '胜利大街福利卡电视剧里附近的萨拉俯拾地芥',
        imageList: ['/images/thum.jpg', '/images/thum.jpg', '/images/thum.jpg']
      },
      {
        date: '2019-03-10',
        content: '胜利大街福利卡电视剧里附近的萨拉俯拾地芥',
        imageList: ['/images/thum.jpg', '/images/thum.jpg', '/images/thum.jpg']
      }
    ],
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})