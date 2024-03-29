var service = require('../../service/douban/douban'),
    utils = require('../../common/utils/utils'),
    _fn;

Page({
    data: {
        movies: {},
        tabs: {
            currentIndex: 0,
            list: [{
                text: '正在热映',
                type: '1'
            }, {
                text: '即将上映',
                type: '2'
            }]
        }
    },
    onReady: function() {
        // 进入便选择第一项
        _fn.selectTab.call(this, 0);
    },
    changeTab: function(e) {
        var target = e.target;
        // 选中不同项
        _fn.selectTab.call(this, target.dataset.index);
    }
});

_fn = {
    selectTab: function(index) {
        var self = this,
            tabs = self.data.tabs;
        // 切换状态
        self.setData({
            'tabs.currentIndex': index
        });
        utils.showLoading();
        // 获取数据
        service.getMovieList(tabs.list[index].type, function(data) {
            utils.hideLoading();
            // 渲染页面
            _fn.renderList.call(self, data);
        });
    },
    renderList: function(data) {
        data = data || listData;
        // 可能会对数据进行处理
        this.setData({
            movies: data
        });
    }
}

var listData = {
    "count": 20,
    "start": 0,
    "total": 30,
    "subjects": [{
        "rating": {
            "max": 10,
            "average": 7.1,
            "stars": "35",
            "min": 0
        },
        "genres": ["剧情", "喜剧"],
        "title": "我不是潘金莲",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1050059/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1691.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1691.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1691.jpg"
            },
            "name": "范冰冰",
            "id": "1050059"
        }, {
            "alt": "https://movie.douban.com/celebrity/1274274/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/39703.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/39703.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/39703.jpg"
            },
            "name": "郭涛",
            "id": "1274274"
        }, {
            "alt": "https://movie.douban.com/celebrity/1324043/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/58870.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/58870.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/58870.jpg"
            },
            "name": "大鹏",
            "id": "1324043"
        }],
        "collect_count": 17912,
        "original_title": "我不是潘金莲",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1274255/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/45667.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/45667.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/45667.jpg"
            },
            "name": "冯小刚",
            "id": "1274255"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2378133884.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2378133884.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2378133884.jpg"
        },
        "alt": "https://movie.douban.com/subject/26630781/",
        "id": "26630781"
    }, {
        "rating": {
            "max": 10,
            "average": 7.9,
            "stars": "40",
            "min": 0
        },
        "genres": ["动作", "科幻", "奇幻"],
        "title": "奇异博士",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1009405/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/41072.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/41072.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/41072.jpg"
            },
            "name": "本尼迪克特·康伯巴奇",
            "id": "1009405"
        }, {
            "alt": "https://movie.douban.com/celebrity/1025152/",
            "avatars": {
                "small": "https://img5.doubanio.com/img/celebrity/small/3546.jpg",
                "large": "https://img5.doubanio.com/img/celebrity/large/3546.jpg",
                "medium": "https://img5.doubanio.com/img/celebrity/medium/3546.jpg"
            },
            "name": "蒂尔达·斯文顿",
            "id": "1025152"
        }, {
            "alt": "https://movie.douban.com/celebrity/1040529/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/57893.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/57893.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/57893.jpg"
            },
            "name": "麦斯·米科尔森",
            "id": "1040529"
        }],
        "collect_count": 135300,
        "original_title": "Doctor Strange",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1320372/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/49077.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/49077.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/49077.jpg"
            },
            "name": "斯科特·德瑞克森",
            "id": "1320372"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
        },
        "alt": "https://movie.douban.com/subject/3025375/",
        "id": "3025375"
    }, {
        "rating": {
            "max": 10,
            "average": 4.1,
            "stars": "20",
            "min": 0
        },
        "genres": ["奇幻", "冒险"],
        "title": "勇士之门",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1274608/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/30529.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/30529.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/30529.jpg"
            },
            "name": "赵又廷",
            "id": "1274608"
        }, {
            "alt": "https://movie.douban.com/celebrity/1315861/",
            "avatars": {
                "small": "https://img5.doubanio.com/img/celebrity/small/57286.jpg",
                "large": "https://img5.doubanio.com/img/celebrity/large/57286.jpg",
                "medium": "https://img5.doubanio.com/img/celebrity/medium/57286.jpg"
            },
            "name": "倪妮",
            "id": "1315861"
        }, {
            "alt": "https://movie.douban.com/celebrity/1252786/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1429752266.85.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1429752266.85.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1429752266.85.jpg"
            },
            "name": "尤赖亚·谢尔顿",
            "id": "1252786"
        }],
        "collect_count": 721,
        "original_title": "勇士之门",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1332523/",
            "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            },
            "name": "马蒂亚斯·霍恩",
            "id": "1332523"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2393908940.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2393908940.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2393908940.jpg"
        },
        "alt": "https://movie.douban.com/subject/25845294/",
        "id": "25845294"
    }, {
        "rating": {
            "max": 10,
            "average": 8.5,
            "stars": "45",
            "min": 0
        },
        "genres": ["剧情", "战争"],
        "title": "比利·林恩的中场战事",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1348117/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1424957578.32.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1424957578.32.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1424957578.32.jpg"
            },
            "name": "乔·阿尔文",
            "id": "1348117"
        }, {
            "alt": "https://movie.douban.com/celebrity/1047958/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/47467.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/47467.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/47467.jpg"
            },
            "name": "加内特·赫德兰",
            "id": "1047958"
        }, {
            "alt": "https://movie.douban.com/celebrity/1012533/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/11265.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/11265.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/11265.jpg"
            },
            "name": "克里斯汀·斯图尔特",
            "id": "1012533"
        }],
        "collect_count": 73457,
        "original_title": "Billy Lynn's Long Halftime Walk",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1054421/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/595.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/595.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/595.jpg"
            },
            "name": "李安",
            "id": "1054421"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2391542403.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2391542403.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2391542403.jpg"
        },
        "alt": "https://movie.douban.com/subject/25983044/",
        "id": "25983044"
    }, {
        "rating": {
            "max": 10,
            "average": 6.5,
            "stars": "35",
            "min": 0
        },
        "genres": ["喜剧"],
        "title": "阿拉丁与神灯",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1356429/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1459858599.17.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1459858599.17.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1459858599.17.jpg"
            },
            "name": "凯文·亚当斯",
            "id": "1356429"
        }, {
            "alt": "https://movie.douban.com/celebrity/1005269/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/19115.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/19115.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/19115.jpg"
            },
            "name": "让-保罗·卢弗",
            "id": "1005269"
        }, {
            "alt": "https://movie.douban.com/celebrity/1339884/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1398669983.38.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1398669983.38.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1398669983.38.jpg"
            },
            "name": "凡妮莎·吉德",
            "id": "1339884"
        }],
        "collect_count": 1375,
        "original_title": "Les nouvelles aventures d'Aladin",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1345487/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1459925913.71.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1459925913.71.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1459925913.71.jpg"
            },
            "name": "亚瑟·邦扎康",
            "id": "1345487"
        }],
        "year": "2015",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2392693383.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2392693383.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2392693383.jpg"
        },
        "alt": "https://movie.douban.com/subject/26602796/",
        "id": "26602796"
    }, {
        "rating": {
            "max": 10,
            "average": 7.2,
            "stars": "35",
            "min": 0
        },
        "genres": ["剧情", "冒险", "灾难"],
        "title": "深海浩劫",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1035674/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1407766093.88.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1407766093.88.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1407766093.88.jpg"
            },
            "name": "马克·沃尔伯格",
            "id": "1035674"
        }, {
            "alt": "https://movie.douban.com/celebrity/1314963/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/53688.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/53688.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/53688.jpg"
            },
            "name": "迪伦·欧布莱恩",
            "id": "1314963"
        }, {
            "alt": "https://movie.douban.com/celebrity/1041013/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1367250434.9.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1367250434.9.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1367250434.9.jpg"
            },
            "name": "约翰·马尔科维奇",
            "id": "1041013"
        }],
        "collect_count": 5715,
        "original_title": "Deepwater Horizon",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1031938/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/30850.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/30850.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/30850.jpg"
            },
            "name": "彼得·博格",
            "id": "1031938"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2396092735.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2396092735.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2396092735.jpg"
        },
        "alt": "https://movie.douban.com/subject/22266320/",
        "id": "22266320"
    }, {
        "rating": {
            "max": 10,
            "average": 8.1,
            "stars": "40",
            "min": 0
        },
        "genres": ["剧情", "动作", "动画"],
        "title": "航海王之黄金城",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1016801/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/4978.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/4978.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/4978.jpg"
            },
            "name": "田中真弓",
            "id": "1016801"
        }, {
            "alt": "https://movie.douban.com/celebrity/1037337/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/10219.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/10219.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/10219.jpg"
            },
            "name": "中井和哉",
            "id": "1037337"
        }, {
            "alt": "https://movie.douban.com/celebrity/1033344/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/15181.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/15181.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/15181.jpg"
            },
            "name": "冈村明美",
            "id": "1033344"
        }],
        "collect_count": 14891,
        "original_title": "ONE PIECE FILM GOLD",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1364439/",
            "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            },
            "name": "宮元宏彰",
            "id": "1364439"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2392493260.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2392493260.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2392493260.jpg"
        },
        "alt": "https://movie.douban.com/subject/26598021/",
        "id": "26598021"
    }, {
        "rating": {
            "max": 10,
            "average": 8.4,
            "stars": "45",
            "min": 0
        },
        "genres": ["剧情", "喜剧"],
        "title": "驴得水",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1362973/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1478066140.77.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1478066140.77.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1478066140.77.jpg"
            },
            "name": "任素汐",
            "id": "1362973"
        }, {
            "alt": "https://movie.douban.com/celebrity/1355797/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1458442004.38.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1458442004.38.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1458442004.38.jpg"
            },
            "name": "大力",
            "id": "1355797"
        }, {
            "alt": "https://movie.douban.com/celebrity/1337891/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1392696207.67.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1392696207.67.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1392696207.67.jpg"
            },
            "name": "刘帅良",
            "id": "1337891"
        }],
        "collect_count": 87450,
        "original_title": "驴得水",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1362256/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1477663977.75.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1477663977.75.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1477663977.75.jpg"
            },
            "name": "周申",
            "id": "1362256"
        }, {
            "alt": "https://movie.douban.com/celebrity/1362257/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1477663883.18.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1477663883.18.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1477663883.18.jpg"
            },
            "name": "刘露",
            "id": "1362257"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2393044761.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2393044761.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2393044761.jpg"
        },
        "alt": "https://movie.douban.com/subject/25921812/",
        "id": "25921812"
    }, {
        "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
        },
        "genres": ["悬疑", "惊悚"],
        "title": "白云桥",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1326971/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1473847921.78.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1473847921.78.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1473847921.78.jpg"
            },
            "name": "钟萱",
            "id": "1326971"
        }, {
            "alt": "https://movie.douban.com/celebrity/1042785/",
            "avatars": {
                "small": "https://img5.doubanio.com/img/celebrity/small/7016.jpg",
                "large": "https://img5.doubanio.com/img/celebrity/large/7016.jpg",
                "medium": "https://img5.doubanio.com/img/celebrity/medium/7016.jpg"
            },
            "name": "温兆伦",
            "id": "1042785"
        }, {
            "alt": "https://movie.douban.com/celebrity/1339574/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1457753799.81.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1457753799.81.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1457753799.81.jpg"
            },
            "name": "刘宇珽",
            "id": "1339574"
        }],
        "collect_count": 49,
        "original_title": "白云桥",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1326971/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1473847921.78.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1473847921.78.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1473847921.78.jpg"
            },
            "name": "钟萱",
            "id": "1326971"
        }],
        "year": "2015",
        "images": {
            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2397925697.jpg",
            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2397925697.jpg",
            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2397925697.jpg"
        },
        "alt": "https://movie.douban.com/subject/26438800/",
        "id": "26438800"
    }, {
        "rating": {
            "max": 10,
            "average": 4.7,
            "stars": "25",
            "min": 0
        },
        "genres": ["剧情", "喜剧"],
        "title": "外公芳龄38",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1009179/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1368762337.01.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1368762337.01.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1368762337.01.jpg"
            },
            "name": "佟大为",
            "id": "1009179"
        }, {
            "alt": "https://movie.douban.com/celebrity/1313303/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/37554.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/37554.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/37554.jpg"
            },
            "name": "陈妍希",
            "id": "1313303"
        }, {
            "alt": "https://movie.douban.com/celebrity/1355329/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1478848828.8.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1478848828.8.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1478848828.8.jpg"
            },
            "name": "吕云骢",
            "id": "1355329"
        }],
        "collect_count": 1864,
        "original_title": "外公芳龄38",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1276884/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/46669.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/46669.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/46669.jpg"
            },
            "name": "安兵基",
            "id": "1276884"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2394844095.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2394844095.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2394844095.jpg"
        },
        "alt": "https://movie.douban.com/subject/26415200/",
        "id": "26415200"
    }, {
        "rating": {
            "max": 10,
            "average": 7.3,
            "stars": "40",
            "min": 0
        },
        "genres": ["喜剧", "动画"],
        "title": "蜡笔小新：梦境世界大突击",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1048689/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/25830.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/25830.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/25830.jpg"
            },
            "name": "矢岛晶子",
            "id": "1048689"
        }, {
            "alt": "https://movie.douban.com/celebrity/1007835/",
            "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            },
            "name": "楢桥美纪",
            "id": "1007835"
        }, {
            "alt": "https://movie.douban.com/celebrity/1028837/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/5770.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/5770.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/5770.jpg"
            },
            "name": "藤原启治",
            "id": "1028837"
        }],
        "collect_count": 3374,
        "original_title": "クレヨンしんちゃん 爆睡!ユメミーワールド大突撃",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1344924/",
            "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            },
            "name": "高桥涉",
            "id": "1344924"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2393770821.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2393770821.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2393770821.jpg"
        },
        "alt": "https://movie.douban.com/subject/26660834/",
        "id": "26660834"
    }, {
        "rating": {
            "max": 10,
            "average": 6.4,
            "stars": "35",
            "min": 0
        },
        "genres": ["悬疑", "惊悚"],
        "title": "但丁密码",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1054450/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/551.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/551.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/551.jpg"
            },
            "name": "汤姆·汉克斯",
            "id": "1054450"
        }, {
            "alt": "https://movie.douban.com/celebrity/1013981/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/42373.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/42373.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/42373.jpg"
            },
            "name": "菲丽希缇·琼斯",
            "id": "1013981"
        }, {
            "alt": "https://movie.douban.com/celebrity/1040512/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/2150.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/2150.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/2150.jpg"
            },
            "name": "本·福斯特",
            "id": "1040512"
        }],
        "collect_count": 28548,
        "original_title": "Inferno",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1031844/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1366641135.85.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1366641135.85.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1366641135.85.jpg"
            },
            "name": "朗·霍华德",
            "id": "1031844"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2388072933.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2388072933.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388072933.jpg"
        },
        "alt": "https://movie.douban.com/subject/24860318/",
        "id": "24860318"
    }, {
        "rating": {
            "max": 10,
            "average": 5.6,
            "stars": "30",
            "min": 0
        },
        "genres": ["动作", "犯罪"],
        "title": "机械师2：复活",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1049484/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/424.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/424.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/424.jpg"
            },
            "name": "杰森·斯坦森",
            "id": "1049484"
        }, {
            "alt": "https://movie.douban.com/celebrity/1004861/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/37927.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/37927.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/37927.jpg"
            },
            "name": "杰西卡·阿尔芭",
            "id": "1004861"
        }, {
            "alt": "https://movie.douban.com/celebrity/1047994/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/259.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/259.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/259.jpg"
            },
            "name": "汤米·李·琼斯",
            "id": "1047994"
        }],
        "collect_count": 31264,
        "original_title": "Mechanic: Resurrection",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1027653/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/9882.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/9882.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/9882.jpg"
            },
            "name": "丹尼斯·甘塞尔",
            "id": "1027653"
        }],
        "year": "2016",
        "images": {
            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2385311728.jpg",
            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2385311728.jpg",
            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2385311728.jpg"
        },
        "alt": "https://movie.douban.com/subject/25825412/",
        "id": "25825412"
    }, {
        "rating": {
            "max": 10,
            "average": 5.5,
            "stars": "30",
            "min": 0
        },
        "genres": ["喜剧", "爱情"],
        "title": "从你的全世界路过",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1274235/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/805.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/805.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/805.jpg"
            },
            "name": "邓超",
            "id": "1274235"
        }, {
            "alt": "https://movie.douban.com/celebrity/1275542/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/21559.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/21559.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/21559.jpg"
            },
            "name": "白百何",
            "id": "1275542"
        }, {
            "alt": "https://movie.douban.com/celebrity/1276051/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1435567211.65.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1435567211.65.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1435567211.65.jpg"
            },
            "name": "杨洋",
            "id": "1276051"
        }],
        "collect_count": 95190,
        "original_title": "从你的全世界路过",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1275554/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/11460.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/11460.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/11460.jpg"
            },
            "name": "张一白",
            "id": "1275554"
        }],
        "year": "2016",
        "images": {
            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2382076389.jpg",
            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg",
            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2382076389.jpg"
        },
        "alt": "https://movie.douban.com/subject/26280528/",
        "id": "26280528"
    }, {
        "rating": {
            "max": 10,
            "average": 5.8,
            "stars": "30",
            "min": 0
        },
        "genres": ["恐怖", "古装"],
        "title": "育婴室",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1316703/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1421138015.79.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1421138015.79.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1421138015.79.jpg"
            },
            "name": "邱敏敏",
            "id": "1316703"
        }, {
            "alt": "https://movie.douban.com/celebrity/1318883/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/1469384955.41.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/1469384955.41.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/1469384955.41.jpg"
            },
            "name": "朱一龙",
            "id": "1318883"
        }, {
            "alt": "https://movie.douban.com/celebrity/1315812/",
            "avatars": {
                "small": "https://img3.doubanio.com/img/celebrity/small/39261.jpg",
                "large": "https://img3.doubanio.com/img/celebrity/large/39261.jpg",
                "medium": "https://img3.doubanio.com/img/celebrity/medium/39261.jpg"
            },
            "name": "徐洁儿",
            "id": "1315812"
        }],
        "collect_count": 682,
        "original_title": "育婴室",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1327529/",
            "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            },
            "name": "皮查农·塔玛杰拉",
            "id": "1327529"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2372301645.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2372301645.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2372301645.jpg"
        },
        "alt": "https://movie.douban.com/subject/26318896/",
        "id": "26318896"
    }, {
        "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
        },
        "genres": ["惊悚", "恐怖"],
        "title": "聊斋新编之画皮新娘",
        "casts": [{
            "alt": "https://movie.douban.com/celebrity/1330887/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1372906434.97.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1372906434.97.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1372906434.97.jpg"
            },
            "name": "丁汇宇",
            "id": "1330887"
        }, {
            "alt": "https://movie.douban.com/celebrity/1340984/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1403756298.69.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1403756298.69.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1403756298.69.jpg"
            },
            "name": "殷果儿",
            "id": "1340984"
        }, {
            "alt": "https://movie.douban.com/celebrity/1356781/",
            "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            },
            "name": "徐千京",
            "id": "1356781"
        }],
        "collect_count": 261,
        "original_title": "聊斋新编之画皮新娘",
        "subtype": "movie",
        "directors": [{
            "alt": "https://movie.douban.com/celebrity/1353666/",
            "avatars": {
                "small": "https://img1.doubanio.com/img/celebrity/small/1478422761.77.jpg",
                "large": "https://img1.doubanio.com/img/celebrity/large/1478422761.77.jpg",
                "medium": "https://img1.doubanio.com/img/celebrity/medium/1478422761.77.jpg"
            },
            "name": "摩撒利",
            "id": "1353666"
        }],
        "year": "2016",
        "images": {
            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2395925040.jpg",
            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2395925040.jpg",
            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2395925040.jpg"
        },
        "alt": "https://movie.douban.com/subject/26770773/",
        "id": "26770773"
    }],
    "title": "正在上映的电影-北京"
};