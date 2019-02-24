// pages/components/pageHead/pageHead.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: app.globalData.myName,
    },
    address: {
      type: String,
      value: app.globalData.myAddress
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
