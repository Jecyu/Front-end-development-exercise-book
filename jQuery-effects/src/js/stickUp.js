/**
 * @Author: Jecyu
 * @Date: 2017-11-06 9:42:59 pm 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-11-07 3:13:30 pm 
 */

// page逻辑
var page = {

    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        // $('.demo-item').html('<div class="loading"></div>');
        // 给予按钮激活状态
        $('.btn-groups .item-5').addClass('active');
    },
    bindEvent: function () {
        var _this     = this;
        var $nav      = $('.nav');
        // 复制一个新的nav，用来stickUp
        var $navClone = $nav.addClass('original').clone().addClass('cloned').insertBefore($nav)
                            .css('position', 'fixed').css('top', '0').css('z-index', 500)
                            .removeClass('original')
                            .hide();
                            
        // 监听页面滚动，设置stickUp
        var scrollIntervalId = setInterval(_this.setFixed(), 10);

    },
    setFixed: function() {
        var _this  = this;

        var $orgNav = $('.original');
        
        // 元素上侧偏移Document顶部的距离
        _this.offsetH = $orgNav.offset().top;
        _this.offsetL = $orgNav.offset().left;
        _this.$orgNavW = $orgNav.width();

        // 监听页面滚动
        $(window).on('scroll', function () {
            var scrollT = $(this).scrollTop();
            if (scrollT >= _this.offsetH) {
                // 滚动条滑过导航栏，只显示clone后的导航栏
                $('.cloned').css('left', _this.offsetL+'px')
                            .css('top', '0')
                            .css('width', _this.$orgNavW)
                            .show();
                $orgNav.css('visibility', 'hidden');
            }

            // 滚动条没有滑过导航栏，只显示原始的导航栏
            else {
                $('.cloned').hide();
                $orgNav.css('visibility', 'visible');
            }

        });
    }
    
};

$(function () {
    page.init();
});

