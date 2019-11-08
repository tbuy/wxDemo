// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  width: 0,
  height: 0,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success:(res)=>{
        this.width = res.windowWidth;
        this.height = res.windowHeight; 
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var ctx = wx.createCanvasContext('firstCanvas')
    //弧度 = 角度 * Math.PI / 180
    var _deg6 = 6 * Math.PI / 180
    var _deg30 = 30 * Math.PI / 180
    var _deg90 = 90 * Math.PI / 180
    //表盘半径
    var _radius = this.width / 2 - 30
    var _width = this.width / 2;
    var _height = this.height / 2;
    draw()
    //每秒绘制一次
    // this.timer = setInterval(draw, 1000)

    function draw(){
      console.log(1)
      //修改坐标原点
      ctx.translate(_width, _height)
      //绘制表盘
      drawClock()
      //绘制表针
      // drawHand()

      ctx.draw();
    }

    function drawClock(){
      console.log(2)

      //绘制大圆
      //arc(x,y,r,开始弧度，结束弧度，是否逆时针)
      ctx.setLineWidth(2)
      //开始创建一个路径
      ctx.beginPath()
      ctx.arc(0, 0, _radius, 0,2 * Math.PI , true)
      ctx.stroke()
      //绘制小圈
      ctx.setLineWidth(1)
      ctx.beginPath()
      ctx.arc(0, 0, 8, 0, 2 * Math.PI, true)
      ctx.stroke()
      //绘制大刻度
      ctx.setLineWidth(5)
      for(var i = 0;i<12;i++){
        ctx.rotate(_deg30)
        ctx.beginPath()
        ctx.moveTo(_radius, 0)
        ctx.lineTo(_radius - 15,0)
        ctx.stroke()
      }
      //绘制小刻度
      ctx.setLineWidth(1)
      for (var i = 0; i < 60; i++) {
        ctx.rotate(_deg6)
        ctx.beginPath()
        ctx.moveTo(_radius, 0)
        ctx.lineTo(_radius - 10, 0)
        ctx.stroke()
      }
      //绘制文本
      ctx.setLineWidth(20)
      ctx.setTextBaseline = 'middle'
      var _r = _radius - 30
      for(var i = 1;i <= 12; i++){
        var _x = _r * Math.cos(_deg30 * i - _deg90)
        var _y = _r * Math.sin(_deg30 * i - _deg90)
        ctx.fillText(i, _x - 6, _y)
      }
    }

    function drawHand(){
      
    }
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

  }
})