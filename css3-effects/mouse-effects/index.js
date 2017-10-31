/**
 * @Author: Jecyu
 * @Date: 2017-10-31 11:47:30 am 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-10-31 11:47:41 am 
 */
'use strict';

$('.btn-item').on('click', function() {
    $(this).addClass('active').siblings('.btn-item').removeClass('active');
})