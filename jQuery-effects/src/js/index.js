
// page逻辑
var page = {

    init: function() {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function() {
        // $('.demo-item').html('<div class="loading"></div>');
        // 给予按钮激活状态
        $('.btn-groups .item-1').addClass('active');
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
        // 元素上侧偏移Document顶部的距离
        var offsetH = $el.offset().top;

        // console.log(' offsetH:' + offsetH + ' winH:' + winH + ' scrollT:'  + scrollT);

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
        // $el.siblings('.loading').hide();

        $el.attr('src', $el.attr('data-src'));
        $el.css({'height': '100%', 'width': '100%'} );
    },

};

$(function() {
    page.init();
});

