/**
 * @Author: Jecyu
 * @Date: 2017-11-03 10:35:51 am 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-11-06 9:29:27 pm 
 */

'use strict';

$('.btn-item').on('click', function () {
    $(this).addClass('active').siblings('.btn-item').removeClass('active');
})

// 解决因为跳转页面自动刷型，从而导致该选项按钮失去actice状态
// 读取url的参数，从而动态给该页导航加上active