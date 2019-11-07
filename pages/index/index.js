

Page({
  data: {
  
  },
  goMusic(){
    wx.navigateTo({
      url: '/pages/music/music',
    })
  },
  goMap() {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  goCanvas() {
    wx.navigateTo({
      url: '/pages/canvas/canvas',
    })
  },
})
