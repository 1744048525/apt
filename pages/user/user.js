// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用来存储用户数据
    userInfo:{
      //用户的昵称
      nickName:''
    }
  },
  //获取用户信息
  getUserInfo:function (e) {
    //获取到当前用户的信息
    console.log(e.detail.userInfo);
    // 将获取到的个人信息存入到data中
    // 以下方法会出现一个问题,就是每次重新刷新页面就会需要重新授权,因为每次刷新页面的时候data的数据就会被清空,此是用户不点击按钮,data中就不会有用户信息,则{{!!userInfo.nickName}为false,相应的标签就不会被渲染。
    // 解决方法,使用本地存储存储用户数据,因为本地存储的数据即使页面重新刷新也会一直存在。
    this.setData({
      userInfo:e.detail.userInfo,
    });
    //将获取到的用户数据存储到本地存储中
    // StorageSync是Storage的同步版本
    // 此时还是会出现重新刷新页面有需要用户重新授权的情况,因为没有为data重新赋值
    //解决方法:在页面完全显示之前,就将本地存储的个人信息赋值到data中,这样子在用户看到界面的时候就能保持授权后的状态了
    wx.setStorageSync('userInfo', e.detail.userInfo);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 监听小程序启动或切前台。
   */
  onShow: function () {
    //获取到本地存储的用户数据
    let getUserInfo = wx.getStorageSync("userInfo");
    //将获取到的数据设置到data中
    this.setData({
      userInfo:getUserInfo,
    });
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

  }
})