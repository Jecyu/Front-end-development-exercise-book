
// page逻辑
var page = {

    init: function() {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function() {
        // $('.demo-item').html('<div class="loading"></div>');
    },
    bindEvent: function() {
        var _this = this;
        // 监听页面滚动
        $(window).scroll(function(event) {
            _this.loadImage();
        });

    },
    // 加载图片
    loadImage: function() {
        var _this   = this;
        var lazyImg = $('img');

        lazyImg.each(function() {
            var $cur = $(this);
            if (_this.checkInView($cur)) {
                setTimeout(function() {
                    _this.showImage($cur);
                }, 200);
            } 
        });
        
        
    },
    // 检查元素是否可视区域 true || false
    checkInView: function($el) {
        var _this = this;
        // 可视区域高度
        var winH  = $(window).height();
        // 滚动条距离顶部高度
        var scrollT = $(window).scrollTop();
        // 元素上侧偏移祖先元素demo-item（position不为static）的距离
        var offsetH = $el.offset().top;

        if (offsetH < winH + scrollT) {
            return true;
        }
        else {
            return false;
        }
    },
    // 显示图片,把data-src值赋给src
    showImage: function($el) {
        var _this = this;
        $el.attr('src', $el.attr('data-src'));
    },

};

$(function() {
    page.init();
});