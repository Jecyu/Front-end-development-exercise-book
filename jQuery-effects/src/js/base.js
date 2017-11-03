/**
 * @Author: Jecyu
 * @Date: 2017-11-03 10:35:51 am 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-11-03 10:37:03 am 
 */

'use strict';

$('.btn-item').on('click', function () {
    $(this).addClass('active').siblings('.btn-item').removeClass('active');
})