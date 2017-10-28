/**
 * @Author: Jecyu
 * @Date: 2017-10-27 11:38:14 pm 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-10-28 12:05:44 pm 
 */

'use strict';

$('.btn-item').on('click', function() {
    $(this).addClass('active').siblings('.btn-item').removeClass('active');
})




