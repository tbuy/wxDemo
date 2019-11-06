// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //tab选中
    selectedId: 2,
    //swiper选中
    currentId: 2,
    height: 0,
    //tab栏
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
    //入口栏
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
    //音乐列表
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
    ],
    //正在播放的音乐的ID
    playingMusicIndex: 0,
    //播放状态 1 播放 2 暂停 3 停止
    playState: 3
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
  //音乐实例
  musicPlayer: null,
  //音乐初始化
  musicInit(){
    this.musicPlayer = wx.createInnerAudioContext();
  },
  //播放音乐
  musicPlay(){
    this.musicPlayer.src = this.data.musiclist[this.data.playingMusicIndex].src;
    this.musicPlayer.play()
    this.setData({
      playState: 1
    })
  },
  //暂停音乐
  musicPause(){
    this.musicPlayer.pause()
    this.setData({
      playState: 2
    })
  },
  //停止音乐
  musicStop(){
    this.musicPlayer.stop()
    this.setData({
      playState: 3
    })
  },
  //上一首
  musicPre(){
    if (this.data.playingMusicIndex == 0){
      wx.showToast({
        title: '已经是第一首音乐',
        icon: 'none'
      })
    }else{
      this.musicStop()
      this.setData({
        playingMusicIndex: this.data.playingMusicIndex - 1
      })
      this.musicPlay()
    }
  },
  //下一首
  musicNext(){
    if (this.data.playingMusicIndex == this.data.musiclist.length - 1) {
      wx.showToast({
        title: '已经是最后一首音乐',
        icon: 'none'
      })
    } else {
      this.musicStop()
      this.setData({
        playingMusicIndex: this.data.playingMusicIndex + 1
      })
      this.musicPlay()
    }
  },
  //选择音乐
  musicSelect(e){
    this.musicStop()
    this.setData({
      playingMusicIndex: e.currentTarget.dataset.index
    })
    this.musicPlay()
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