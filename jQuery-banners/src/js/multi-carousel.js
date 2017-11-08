
// banner逻辑
var page = {

    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        var _this = this;
        // $('.demo-item').html('<div class="loading"></div>');
        // 给予按钮激活状态
        $('.btn-groups .item-2').addClass('active');

    },
    bindEvent: function () {
        var _this = this;

        // 初始化
        // 获取焦点图的宽度
        _this.bannerW = $('.banner').width();
        // 获取焦点图的个数
        var len = $('.banner ul li').length;
        var index = 0;
        var picTimer;

        // 添加小按钮以及pre、next按钮
        var btn = "<div class='btn-group'>";
        for (var i = 0; i < len; i++) {
            btn += "<span></span>";
        }
        btn += "</div>";
        btn += "<div class='banner-arrow prev'></div>" + "<div class='banner-arrow next'></div>";
        btn += "<span class='hidden left'></span>" + "<span class='hidden right'></span>";

        $('.banner').append(btn);
        // 计算出ul元素的宽度，以满足所有li元素排列在同一行左浮动
        $('.banner ul').css("width", _this.bannerW * (len + 1));


        // 鼠标滑上焦点图时停止自动播放，滑出时开始自动播放(须放在点击事件前，否则要触发点击事件才执行)
        $('.banner').hover(function () {
            clearInterval(picTimer);
        }, function () {
            picTimer = setInterval(function () {
                // 如果播放完最后一张，则将索引归零
                if (index === len) {
                    index = 0;
                    _this.showFirstPic(len, index);
                }
                // 普通切换
                else {
                    _this.showPics(index);
                }

                index++;

            }, 2000);
        })

        // 为小按钮添加鼠标滑入事件，以显示相应的内容
        $('.banner div.btn-group span').css("opacity", 0.4).mouseenter(function () {
            index = $('.banner div.btn-group span').index(this);
            // console.log(index);
            _this.showPics(index);
        });

        // 上一页按钮单击事件
        $('.banner span.left').click(function () {
            if (index === -1) {
                // console.log(index);
                // 跳到最后一页
                index = len - 1;
            }
            _this.showPics(index);
            index--;
        })

        // 下一页按钮单击事件
        $('.banner span.right').click(function () {
            if (index === len) {
                index = 0;
                _this.showFirstPic(len, index);
            }
            else {
                _this.showPics(index);
            }
            index++;
        })


    },
    // 显示图片,根据接受到的index值显示对应的内容
    showPics: function (index) {
        var _this = this;
        // 根据index值计算ul元素的left值
        var nowLeft = -index * _this.bannerW;
        // 通过animate()调整ul元素滚动到计算出的position
        $('.banner ul').stop(true, false).animate({ "left": nowLeft }, 500);
        // 为当前按钮切换到选中效果
        $('.banner .btn-group span').animate({ "opacity": "0.4" }, 300)
            .eq(index).animate({ "opacity": "1" }, 100);
    },
    // 最后一张图自动切换第一张图时用
    showFirstPic: function (len, index) {
        var _this = this;
        // 实现从最右边到最左边图时依然是往左滑动移动效果
        $('.banner ul').append($('.banner ul li:first').clone());
        // 获取到最后一个li元素的右边
        var nowLeft = -len * _this.bannerW;
        $('.banner ul').stop(true, false).animate({ "left": nowLeft }, 500, function () {
            // 动画结束后，通过callback把ul重新定位到起点，并删除第一个复制的元素
            $('.banner ul').css("left", "0");
            $('.banner ul li:last').remove();
        })
        // 为当前的按钮切换到选中的效果
        $('.banner .btn-group span').animate({ "opacity": "0.4" }, 300)
            .eq(index).animate({ "opacity": "1" }, 100);
    }

};

$(function () {
    page.init();
});

