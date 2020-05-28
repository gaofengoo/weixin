// pages/douban/splash.js
Page({
  data: {
    subjects: [],
  },
  onLoad(options) {
    let app = getApp()
    app.request("http://localhost:4000/movie/bang/coming_soon?start=0&count=3").then(
      data => {
        this.setData({ subjects: data.subjects })
      }
    )

wx.setStorage({
  key: "has_shown_splash",
  data: true
})
  }
})