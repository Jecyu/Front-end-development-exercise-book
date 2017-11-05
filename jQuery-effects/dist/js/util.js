/**
 * @Author: jeCyu
 * @Date: 2017-10-09 8:57:41 am 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-11-05 12:01:23 am 
 */

'use strict';

var _util = {
    // param可以是对象、函数
    // 网络请求
    request: function (param) {
        // 获取_mm对象，以给$.ajax调用
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                // 请求成功        
                if (0 === res.status) {
                    // 利用&&断点特性作为条件判断，左边为true才执行右边的代码
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                // 没有登录状态，需要强制登录
                else if (10 === res.status) {
                    _this.doLogin();
                }
                // 请求数据错误
                else if (1 === res.status) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    // 获取服务器地址
    // 这里把path作为一个方法，为了更改serverHost和添加一些参数更加方便
    getServerUrl: function (path) {
        return conf.serverHost + path;
    },
    // 获取URL参数  
    getUrlParam: function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substring(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    // 渲染html模版
    // 参数data必须为一个对象
    renderHtml: function (htmlTemplate, data) {
        // 编译
        var template = Hogan.compile(htmlTemplate, data);
            // 渲染
        var result = template.render(data);
        return result;
    },
    // 成功提示
    successTips: function (msg) {
        alert(msg || '操作成功');
    },
    // 错误提示
    errorTips: function (msg) {
        alert(msg || '哪里不对了～');
    }
};


