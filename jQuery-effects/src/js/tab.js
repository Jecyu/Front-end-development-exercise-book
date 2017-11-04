/**
 * @Author: Jecyu
 * @Date: 2017-11-04 10:29:27 am 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-11-04 1:29:28 pm 
 */
'use strict';
// page逻辑
var page = {

    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        // default tab
        $('#tab-1').show();
        $('#tab-5').show();
    },
    bindEvent: function () {
        var _this = this;
            
        $('.tablinks').on('click', function(event) {
            var tabId = $(this).attr('data-tab');
            $(this).addClass('active').siblings().removeClass('active'); 
            $('#' + tabId).show()
                .siblings().hide();
        });


    }
};

$(function () {
    page.init();
});