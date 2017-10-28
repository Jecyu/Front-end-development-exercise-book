/**
 * @Author: Jecyu
 * @Date: 2017-10-28 12:59:46 pm 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-10-28 1:00:32 pm 
 */

'use strict';

$('.btn-item').on('click', function() {
    $(this).addClass('active').siblings('.btn-item').removeClass('active');
})
