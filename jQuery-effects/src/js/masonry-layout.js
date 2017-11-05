/**
 * @Author: jeCyu
 * @Date: 2017-10-09 8:57:41 am 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-11-05 8:53:57 am 
 */

'use strict';

var masonry = {

    init: function () {
        this.bindEvent();
        this.request();
    },
    bindEvent: function () {
        
    },
    // param可以是对象、函数
    // 网络请求
    request: function(param) {
        // 获取masonry对象，以给$.ajax调用
        var _this = this;
        $.ajax({
            type: 'get',
            // 服务器地址
            url: '',
            dataType: 'json',
            data: '',
            success: function(res) {
                // 请求成功        
                if (0 === res.status) {
                    // 渲染数据到目标容器内
                    _this.renderHtml();
                }

            }
        });
    },

    // 渲染html模版
    // 参数data必须为一个对象
    renderHtml: function(htmlTemplate, data) {
        // 编译
        // var template = Hogan.compile(htmlTemplate, data);
        // 渲染
        // var result = template.render(data);
        return result;
    },
    // 下拉加载更多
    loadMore: function (params) {
        
    }

};

$(function () {
    page.init();
});



// // page逻辑
// var page = {

//     init: function () {
//         this.onLoad();
//         this.bindEvent();
//     },
//     onLoad: function () {
//         // $('.demo-item').html('<div class="loading"></div>');
//     },
//     bindEvent: function () {
//         var _this = this;
//         // 监听页面滚动
//         $(window).scroll(function (event) {
//             _this.loadImage();
//         });

//     },
//     // 加载图片
//     loadImage: function () {
//         var _this = this;
//         var lazyImg = $('img');

//         lazyImg.each(function () {
//             var $cur = $(this);
//             if (_this.checkInView($cur)) {
//                 setTimeout(function () {
//                     _this.showImage($cur);
//                 }, 200);
//             }
//         });


//     },
//     // 检查元素是否可视区域 true || false
//     checkInView: function ($el) {
//         var _this = this;
//         // 可视区域高度
//         var winH = $(window).height();
//         // 滚动条距离顶部高度
//         var scrollT = $(window).scrollTop();
//         // 元素上侧偏移Document顶部的距离
//         var offsetH = $el.offset().top;

//         // console.log(' offsetH:' + offsetH + ' winH:' + winH + ' scrollT:'  + scrollT);

//         if (offsetH < winH + scrollT) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     },
//     // 显示图片,把data-src值赋给src
//     showImage: function ($el) {
//         var _this = this;
//         // $el.siblings('.loading').hide();

//         $el.attr('src', $el.attr('data-src'));
//         $el.css({ 'height': '100%', 'width': '100%' });
//     },

// };


