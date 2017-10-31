/**
 * @Author: Jecyu
 * @Date: 2017-10-28 5:16:19 pm 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-10-31 11:08:08 am 
 */

'use strict';

$('.btn-item').on('click', function() {
    $(this).addClass('active').siblings('.btn-item').removeClass('active');
})

