import { request } from "../../utils/util.js"
const app = getApp()
// pages/additional/additional.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.tabbar.tabbar("tabBar", 1, this)
  },
  addYanote: function (e) {
    console.log(e)
    var title = ""
    if (e.detail.value.notetype == "") {
      title = "请选择发布类型"
    } else if (e.detail.value.title == ""){
      title = '清输入标题'
    } else if (e.detail.value.content == ""){
      title = '清输入内容'
    }
    if (title != ""){
      wx.showToast({
        title: title,
        icon: 'none',
        duration: 2000
      })
      return
    }
    request({
      url: "yanote",
      data: {
        userId: 456,
        noteType: e.detail.value.notetype,
        noteTitle: e.detail.value.title,
        noteContent: e.detail.value.content
      },
      type: "POST"
    }, function (data) {
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
    }
    )
  }
})