/*
*自定义JSONP服务
* */
var service = angular.module('mlist.services', []);
service.factory('mlJsonp', function ($rootScope) {
    // 计数器变量
    var count = 0;
    // url:jsonp访问的url
    // callback：访问成功后的函数，参数是一个data对象：callback(data)
    return function (url, callback) {
        var funcName = 'callback' + count++;
        // 替换回调函数的名字
        var newUrl = url.replace('JSON_CALLBACK', funcName);
       // 创建一个script标签
        var scriptEl = document.createElement('script');
        //将带有回调函数名称的url赋值到script标签的src属性
        scriptEl.src = newUrl;
        //将script标签追加在HTML页面上
        document.body.appendChild(scriptEl);
        // 把回调函数放到window对象上
        window[funcName] = function (data) {
            callback(data);
            $rootScope.$apply();//使用该函数通知作用域数据发生变化
            document.body.removeChild(scriptEl);
        };
    }
});