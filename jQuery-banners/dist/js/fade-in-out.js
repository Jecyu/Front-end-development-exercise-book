/**
 * @Author: Jecyu
 * @Date: 2017-11-08 11:25:24 am 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-11-08 7:04:01 pm 
 */

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
        $('.btn-groups .item-3').addClass('active');

    },
    bindEvent: function () {
        var _this = this;
        // 初始化
        // 获取焦点图的个数
        var len = $('.banner img').length;
        // 添加小按钮以及pre、next按钮
        var btn = "<ul class='btn-group'>";
        for (var i = 0; i < len; i++) {
            btn += "<li class='btn-item'></li>";
        }
        btn += "</ul>";
      
        $('.banner').append(btn);
        $('.banner img').css("opacity", 0).css("filter","alpha(opacity='(0*100) +')");            
        $('.banner img').eq(0).css("opacity", 1).css("filter","alpha(opacity='(1*100) +')");            
        $('.banner ul li').eq(0).css("background", "#ccc"); // 默认第一个按钮激活         
        $('.banner .img-desc').html($('.banner img').eq(0).attr('alt'));  
        
        
        // 轮播计数器
        bannerIndex = 0;
        // 轮播器的种类（1 表示左右， 2表示上下）
        var bannerType  = 2;
        // 自动轮播器
        var bannerTimer = setInterval(bannerFn, 3000);
        function bannerFn() {
            // 最后一张
            if (bannerIndex >= $('.banner ul li').size()) {
                // 重置为第一张图片
                bannerIndex = 0;

            }
            var pre = bannerIndex === 0 ? ($('.banner ul li').size() - 1) : bannerIndex - 1;
            var $cur = $('.banner ul li').eq(bannerIndex);

            _this.banner(2, $cur, pre);
            bannerIndex++;
        }
        
        // 手动轮播器    
        // 鼠标滑上按钮时停止自动播放，滑出时开始自动播放
        $('.banner ul li').hover(function () {
            clearInterval(bannerTimer);
            // 当前按钮状态未激活(#ccc, rgb(204, 204, 204)为激活时按钮的背景颜色)
            if ($(this).css("background") != "rgb(204, 204, 204)" && $(this).css("background") != "#ccc") {
                var prev = bannerIndex === 0 ? $('.banner ul li').size() - 1 : bannerIndex - 1;
                // console.log(prev);
                _this.banner(bannerType, this, prev);
                // console.log(bannerIndex);
            }
            
        }, function () {
            bannerIndex = $(this).index() + 1;
            bannerTimer = setInterval(bannerFn, 3000);
        })
    },
    // banner函数用于操作图片对象定位及透明度
    // obj为当前图片对象，prev为上一个图片对象
    banner: function (bannerType, cur, prev) {
        var _this = this;
        $('.banner ul li').css("background", "#555");  
        $(cur).css("background", "#ccc");
        $('.banner .img-desc').html($('.banner img').eq($(cur).index()).attr('alt'));  

        if (bannerType === 1) {
            // 隐藏上一张图片
            $('.banner img').eq(prev).animate({
                opacity: "0",
                left: "-900px"
            }, 1000).css("z-index", 1);
            // 显示当前图片
            $('.banner img').eq($(cur).index()).animate({
                opacity: "1",
                left: "0"
            }, 1000).css("z-index", 2);
        }
        
        else if (bannerType === 2) {
            // 隐藏上一张图片
            $('.banner img').eq(prev).animate({
                opacity: "0",
                top: "150px"
            }, 1000).css("z-index", 1);
            // 显示当前图片
            $('.banner img').eq($(cur).index()).animate({
                opacity: "1",
                top: "0"
            }, 1000).css("z-index", 2);
        }
    },
    // 自动播放banner
    bannerFn: function() {
        var _this = this;

    }   

};

$(function () {
    page.init();
});

