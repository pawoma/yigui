// pages/components/orderItem/orderItem.js
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
    stuCls: ''
  },
  ready() {
    let cls = ''
    switch (this.data.item.status) {
      case 2:
        cls = 'done';
        break;
      case 3:
        cls = 'repair';
        break;
      default:
        cls = 'progress';
    }
    this.setData({
      stuCls: cls
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    edit() {
      wx.navigateTo({
        url: '/pages/editProgress?id=' + this.data.item.id,
      })
      // this.triggerEvent('onclick', this.data.item)
    }
  }
})