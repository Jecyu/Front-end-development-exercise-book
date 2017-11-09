// 给予按钮激活状态
$('.btn-groups .item-2').addClass('active');

function Carousel($carousel) {
    this.$carousel   = $carousel;
    this.$bannerList = $carousel.find('.banner-list');
    this.$items      = this.$bannerList.children();
    // 初始化
    // 获取焦点图的宽度
    this.bannerW = $('.banner').width();
    // 获取焦点图的个数
    this.len = this.$items.size();
    this.index = 0;
    this.picTimer = {};  
}

// banner逻辑
Carousel.prototype = {

    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        var _this = this;
        // 添加小按钮以及pre、next按钮
        var btn = "<div class='btn-group'>";
        for (var i = 0; i < _this.len; i++) {
            btn += "<span></span>";
        }
        btn += "</div>";
        btn += "<div class='banner-arrow prev'></div>" + "<div class='banner-arrow next'></div>";
        btn += "<span class='hidden left'></span>" + "<span class='hidden right'></span>";

        _this.$carousel.append(btn);
        // 计算出ul元素的宽度，以满足所有li元素排列在同一行左浮动
        _this.$bannerList.css("width", _this.bannerW * (_this.len + 1));      
    },
    bindEvent: function () {
        var _this = this;

        // 鼠标滑上焦点图时停止自动播放，滑出时开始自动播放(须放在点击事件前，否则要触发点击事件才执行)
        _this.$carousel.hover(function () {
            clearInterval(_this.picTimer);
        }, function () {
            _this.picTimer = setInterval(function () {
                // 如果播放完最后一张，则将索引归零
                if (_this.index === _this.len) {
                    _this.index = 0;
                    _this.showFirstPic(_this.len, _this.index);
                }
                // 普通切换
                else {
                    _this.showPics(_this.index);
                }

                _this.index++;

            }, 2000);
        })

        // 为小按钮添加鼠标滑入事件，以显示相应的内容
        _this.$carousel.find('div.btn-group span').css("opacity", 0.4).mouseenter(function () {
            _this.index = _this.$carousel.find('.btn-group span').index(this);
            // console.log(index);
            _this.showPics(_this.index);
        });

        // 上一页按钮单击事件
        _this.$carousel.find('span.left').click(function () {
            if (_this.index === -1) {
                // console.log(index);
                // 跳到最后一页
                _this.index = _this.len - 1;
            }
            _this.showPics(_this.index);
            _this.index--;
        })

        // 下一页按钮单击事件
        _this.$carousel.find('span.right').click(function () {
            if (_this.index === _this.len) {
                _this.index = 0;
                _this.showFirstPic( _this.len, _this.index);
            }
            else {
                _this.showPics(_this.index);
            }
            _this.index++;
        })


    },
    // 显示图片,根据接受到的index值显示对应的内容
    showPics: function (index) {
        var _this = this;
        // 根据index值计算ul元素的left值
        var nowLeft = -index * _this.bannerW;
        // 通过animate()调整ul元素滚动到计算出的position
        _this.$bannerList.stop(true, false).animate({ "left": nowLeft }, 500);
        // 为当前按钮切换到选中效果
        _this.$carousel.find('.btn-group span').animate({ "opacity": "0.4" }, 300)
            .eq(index).animate({ "opacity": "1" }, 100);
    },
    // 最后一张图自动切换第一张图时用
    showFirstPic: function (len, index) {
        var _this = this;
        // 实现从最右边到最左边图时依然是往左滑动移动效果
        _this.$bannerList.append(_this.$items.eq(0).clone());
        // 获取到最后一个li元素的右边
        var nowLeft = -len * _this.bannerW;
        _this.$bannerList.stop(true, false).animate({ "left": nowLeft }, 500, function () {
            // 动画结束后，通过callback把ul重新定位到起点，并删除第一个复制的元素
            _this.$bannerList.css("left", "0");
            _this.$carousel.find('ul li:last').remove();
        })
        // 为当前的按钮切换到选中的效果
        _this.$carousel.find('.btn-group span').animate({ "opacity": "0.4" }, 300)
            .eq(index).animate({ "opacity": "1" }, 100);
    }

};

var c1 = new Carousel($('.carousel-1'))
var c2 = new Carousel($('.carousel-2'))
var c3 = new Carousel($('.carousel-3'))
var c4 = new Carousel($('.carousel-4'))

$(function () {
    c1.init();
    c2.init();
    c3.init();
    c4.init();
});

