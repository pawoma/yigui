// pages/evaluation/evaluation.js
const app = getApp();
var that;
var evaluteList = [
  { name: 'qualityBox', textName: '对产品质量满意度', starNumber: 0, index:0 },
  { name: 'designSchemeBox', textName: '对设计方案满意度', starNumber: 0, index: 1},
  { name: 'servicesBox', textName: '对安装服务满意度', starNumber: 0, index: 2 },
  { name: 'wholeOrderBox', textName: '本次订购整体满意度', starNumber: 0, index: 3 },
];
var imageList=[]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myName: app.globalData.myName,
    myAddress: app.globalData.myAddress,
    evaluteList: evaluteList,
    evaluteSuccess:false,

    bar1: true,
    bar2: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
  },
  chooseStar:function(e){
    var data=e.currentTarget.dataset;
    var starNum = parseInt(data.star);
    var arr=this.data.evaluteList;
    arr[data.index].starNumber = starNum;
    this.setData({
      evaluteList: arr
    })
  },
  chooseImage:function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        var obj={};
        obj.src = tempFilePaths;
        imageList.push(obj);
        that.setData({
          imageList: imageList
        })
      }
    })
  },
  submit:function(){
    this.setData({
      evaluteSuccess:true
    })
  },
  return:function(){
    // wx.switchTab({
    //   url: '/pages/index/index',
    // })
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