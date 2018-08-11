import { request } from "../../utils/util.js"
var app = getApp()
// pages/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '世界上唯一不变的，就是一切都在变',
    tabbarIndex: 2,
    userInfo: {},
    showDialog: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.tabbar.tabbar("tabBar", 2, this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面初始化 options为页面跳转所带来的参数
    var _self = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      _self.setData({
        userInfo: userInfo
      })
    })
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
  
  },
  reCharge: function () {
    request({
      url: "yanote",
      data: {
        userId: null,
        noteType: "QUESTION",
        noteTitle: "biaoti",
        noteContent: "dfsdfsdfsfsdfsfsf"
      },
      type: "POST"
    },function(data){
      console.log(data)
    }
  )},
  onClickdiaView: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  onFabu: function(){
    console.log('fds')
    let that = this;
    that.setData({
      showDialog: !this.data.showDialog
    });
  }
})