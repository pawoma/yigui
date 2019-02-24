// pages/components/repairDetailItem/repairDetailItem.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['custom-class'],

  properties: {
    item: {
      type: Object,
      value: {}
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
    clickHandler(e) {
      wx.previewImage({
        current: e.target.dataset.src, // 当前显示图片的http链接
        urls: this.data.item.imageList || [] // 需要预览的图片http链接列表
      })
    }
  }
})