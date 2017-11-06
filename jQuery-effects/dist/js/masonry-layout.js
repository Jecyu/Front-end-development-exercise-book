/**
 * @Author: jeCyu
 * @Date: 2017-10-09 8:57:41 am 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-11-06 9:42:42 pm 
 */

'use strict';

var masonry = {

    init: function () {
        this.bindEvent();
        this.loadMore();
        this.onLoad();
        this.page = 1;
        
    },
    onLoad: function () {
        // $('.demo-item').html('<div class="loading"></div>');
        // 给予按钮激活状态
        $('.btn-groups .item-3').addClass('active');
    },
    bindEvent: function () {
        var _this = this;
        $('.load-more').on('click', function() {
            _this.request();
        })

        // 监听页面滚动
        // $(window).scroll(function (event) {
        //     _this.loadMore();
        // });
    },
    // param可以是对象、函数
    // 网络请求
    request: function() {

        // 获取masonry对象，以给$.ajax调用
        var _this = this;
        $.ajax({
            type: 'get',
            // 服务器地址
            url: 'http://www.behance.net/v2/collections?',
            dataType: 'jsonp', // 指定服务器返回的数据类型
            data: {
                api_key: 'h51ku2MaKzDtqV5LSU4amRjPcfYKMPU9',
                dtype: 'jsonp',
                // page: _this.page
            },

            success: function(res) {
                _this.data = res.collections;
                console.log(_this.data);
             
                // 渲染数据到目标容器内
                _this.renderHtml(_this.data);
                
                // 请求成功        
                // if ('ok' === res.status) {
                //     res = JSON.parse(res);
                //     $('.message').html(JSON.stringify(json));
                //     // _this.dataArr = res.articles;
                    
                //     // 渲染数据到目标容器内
                //     // _this.renderHtml();
                // }

            }
        });
    },

    // 渲染html模版
    // 参数data必须为一个对象
    renderHtml: function(items) {
        var templateHtml = '';

        console.log(items.length);
        
        items.forEach(function(curVal) {
            
            console.log(curVal.project_covers[0].url);
            
            templateHtml += "<div class='item'>";
            templateHtml += "<div class='item-content'>"

            templateHtml += "<a href=' " + curVal.url + "'>";
            templateHtml += "<img class='item-img' src='" + curVal.project_covers[0].url + "' alt='" +                            curVal.label + "'>";
            templateHtml += "</img>";
            templateHtml += "<h3 class='item-title'>" + curVal.title;
            templateHtml += "</h3>";
            templateHtml += "<p class='item-description'>" + curVal.owners[0].username;
            templateHtml += "</p>";
            templateHtml += "</a>";
            
            templateHtml += "</div>";
            templateHtml += "</div>";           
            
        })
        
        
        // $('.masonry .column').append(templateHtml);
        $('.masonry').append(templateHtml);
     
    },
    // 下拉加载更多
    loadMore: function () {
        var _this = this;
        var $loading = $('.loading');
        
        if (_this.checkInView($loading)) {
            setTimeout(function () {
                _this.request();
            }, 200);
        } 
    },
    // 检查Loading元素是否可视区域 true || false，如果在可视区域则自动请求加载更多
    checkInView: function ($el) {
        var _this = this;
        // 可视区域高度
        var winH = $(window).height();
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
    }
};


$(function () {
    masonry.init();
});



