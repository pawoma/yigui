// pages/components/orderItem/orderItem.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['custom-class'],
  properties: {
    item:{
      type:Object,
      value:{}
    },
    noBorder:{
      type:Boolean,
      value:false
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
    onBtnClick(){
      this.triggerEvent('onclick', {a:1})
    }
  }
})
