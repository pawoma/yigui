// pages/components/repairForm/repairForm.js
import {
  formatTime
} from '../../../../utils/util.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    date: formatTime(new Date),
    content: '胜利大街福利卡电视剧里附近的萨拉俯拾地芥',
    imageList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseImage: function() {
      let self = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          let tempFilePaths = res.tempFilePaths;
          let imageList = self.data.imageList
          imageList.push({
            src: tempFilePaths
          });

          self.setData({
            imageList
          })
        }
      })
    },
    submit: function() {
      let { content, date, imageList} = this.data
      if (!content) {
        wx.showToast({
          icon: 'warning',
          title: '请输入保修内容'
        })
        return
      }

      const formData = {
        content,
        date,
        imageList
      }
      this.triggerEvent('on-submit', formData)
      
    },
  }
})