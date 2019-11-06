// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //tab选中
    selectedId: 0,
    //swiper选中
    currentId: 0,
    height: 0,
    tabArray: [{
        id: 0,
        name: '音乐推荐',
      },
      {
        id: 1,
        name: '播放器',
      },
      {
        id: 2,
        name: '播放列表',
      },
    ],
    navlist: [
      {
        id: 1,
        icon: '/images/icon1.png',
        name: '每日精选'
      },
      {
        id: 2,
        icon: '/images/icon2.png',
        name: '排行榜'
      },
      {
        id: 3,
        icon: '/images/icon3.png',
        name: '精选专辑'
      },
    ],
    musiclist: [
      {
        id: 1,
        name: 'hello',
        src: '/1.mp3',
        album: '/images/album1.png',
        image: '/images/disk1.png'
      }, {
        id: 2,
        name: 'world',
        src: '/1.mp3',
        album: '/images/album2.png',
        image: '/images/disk2.png'
      }, {
        id: 3,
        name: 'html',
        src: '/1.mp3',
        album: '/images/album3.png',
        image: '/images/disk3.png'
      }
    ]
  },
  selectedTab(e){
    this.setData({
      selectedId: e.target.dataset.id
    })
  },
  selectedItem(e){
    this.setData({
      currentId: e.detail.current,
      selectedId: e.detail.current
    })
  },
  sliderChange(e){
    console.log(1,e)
  },
  sliderChanging(e){
    console.log(2,e)
  },
  musicPlayer: null,
  //音乐初始化
  musicInit(){
    this.musicPlayer = wx.createInnerAudioContext();
    this.musicPlayer.src = this.data.musiclist[0].src;
  },
  //播放音乐
  musicPlay(){
    this.musicPlayer.play()
  },
  //上一首
  musicPre(){

  },
  //下一首
  musicNext(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight  - 40 - 80
    })
    this.musicInit();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})