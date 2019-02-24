import {
  formatTime
} from '../../../../utils/util.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type:String,
      value:'install'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: formatTime(new Date),
    imageList: [],
    isDone: 0,
    reason: '',
    installStatusList: [{
      name: '是',
      value: 1
    },
    {
      name: '否',
      value: 0,
      checked: 'true'
    },
    {
      name: '异常结单',
      value: 2
    },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onRadioChange(e) {
      this.triggerEvent('change', e.detail.value)
    },

    onInputChange(e) {
      this.setData({
        reason: e.detail.value
      })
    },
    chooseImage() {
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
    submit(){
      let { isDone,reason, date, imageList } = this.data
      if (!reason) {
        wx.showToast({
          icon: 'warning',
          title: '请输入未完工原因'
        })
        return
      }

      const formData = {
        reason,
        date,
        imageList,
        isDone
      }
      this.triggerEvent('submit', formData)
    }
  }
})