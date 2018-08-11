//index.js
//获取应用实例
const app = getApp()
const iconList = require('../../data/four-icon-data')
const list = require('../../data/index-tuijian-data')
import { request } from "../../utils/util.js"

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indexList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    app.globalData.tabbar.tabbar("tabBar", 0, this)
  },
  onReady: function (){
    var that = this
    this.setData(iconList)
    //this.setData(list)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    request({
      url: "yanote",
      data: {},
      type: "GET"
    }, function (data) {
      that.setData({
        indexList: data
      })
    })
  },
  onPullDownRefresh: function () {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onClickdiaView: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  onFabu: function () {
    console.log('fds')
    let that = this;
    that.setData({
      showDialog: !this.data.showDialog
    });
  }
})
