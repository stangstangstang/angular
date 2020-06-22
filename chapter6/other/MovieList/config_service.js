/*
* 分页配置信息
* */
var config = angular.module('mlist.services.config', []);
config.factory('mlConfig', function () {
    var countPerPage = 6;
    return {
        // 为了避免其他开发人员随便改变countPerPage的值，所以对它做一个封装，这样就是只读的了。
        getCountPerPage: function () {
            return countPerPage;
        }
    }
});