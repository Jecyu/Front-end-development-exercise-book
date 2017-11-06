/**
 * @Author: Jecyu
 * @Date: 2017-11-06 11:36:48 pm 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-11-06 11:37:46 pm 
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
        var _this = this;
        var $toTop = $('#toTop');
        // 监听页面滚动
        $(window).scroll(function (event) {
            _this.loadImage();

            // 回到顶部
            // 渐隐、渐出toTop button
            if ($(window).scrollTop() > 100) {
                $toTop.fadeIn(1000);
            }

            else {
                $toTop.fadeOut(1000);
            }
        });

        // click back to Top 
        $toTop.click(function (e) {
            $('body, html').animate({ scrollTop: 0 }, 1000);
        })

    },

    // 回到顶部
    goTop: function () {

    }

};

$(function () {
    page.init();
});

