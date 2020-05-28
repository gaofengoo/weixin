// pages/douban/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'in_theaters',
    page: 1,
    size: 20,
    total: 1,
    movies: []
  },

loadMorePage() {
  if (this.data.page > this.data.total) return
  this.data.page++
  this.retrieve()
},

  retrieve() {
    let app = getApp()
    let start = (this.data.page - 1) * this.data.size
    wx.showLoading({title: '加载中'})

    return app.request(`http://localhost:4000/movie/bang/${this.data.type}?start=${start}&count=${this.data.size}`)
      .then(res => {
        if (res.subjects.length) {
          let movies = this.data.movies.concat(res.subjects)
          let total = Math.floor(res.total / this.data.size)
          this.setData({ movies: movies, total: total, page: this.data.page })
          wx.setNavigationBarTitle({ title: res.title })
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        wx.hideLoading()
      })
  },

  onLoad(options) {
    // 有三种类型： in_theaters  coming_soon  us_box
    this.data.type = options.type || this.data.type
    this.retrieve()
  }
})