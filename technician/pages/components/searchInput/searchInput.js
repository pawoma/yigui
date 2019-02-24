// pages/components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    initValue: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    keyword: ''
  },

  ready(){
    this.setData({
      keyword:this.data.initValue
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindKeyInput(e) {
      this.setData({
        keyword: e.detail.value
      })
    },
    onSearch(e) {
      this.triggerEvent('on-search', this.data.keyword)
    }
  }
})