// pages/douban/index.js
Page({

data: {
  boards: [{ key: 'in_theaters' }, { key: 'coming_soon' }, { key: 'top250' }],
},
onPullDownRefresh () {
  wx.showLoading({
    title: '加载中',
  })
  this.retrieveData().then(() => {
    wx.stopPullDownRefresh()
    wx.hideLoading()
  })
},
retrieveData() {
  let app = getApp()

  var promises = this.data.boards.map(function (board) {
    console.log("board", board)
    return app.request(`http://localhost:4000/movie/bang/${board.key}?start=0&count=10`)
      .then(function (d) {
        if (!d) return board
        board.title = d.title
        board.movies = d.subjects
        return board
      }).catch(err => console.log(err))
  })

  return app.promise.all(promises).then(boards => {
    // console.log(boards)
    if (!boards || !boards.length) return
    this.setData({ boards: boards, loading: false})
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getStorage({
      key: 'has_shown_splash',
      success: res => {
        this.retrieveData()
      },
      fail: err => {
        wx.redirectTo({
          url: '/pages/douban/splash',
        })
      }
    })
  }
})