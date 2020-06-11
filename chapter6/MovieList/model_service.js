/*
* 封装Model层，通过JSONP服务获取数据
* */
var model = angular.module('mlist.model', ['mlist.services']);
model.factory('mlModel', function (mlJsonp) {
    return {
        //即将上映
        getComingSoon: function (start, count, callback) {
            var url = 'http://api.douban.com/v2/movie/coming_soon?start='
                      +start+'&count='+count+'&callback=JSON_CALLBACK';
            mlJsonp(url, function (data) {
                callback(data);
            });
        },
        //正在热映
        getInTheaters: function (start, count, callback) {
            var url = 'http://api.douban.com/v2/movie/in_theaters?start='
                      +start+'&count='+count+'&callback=JSON_CALLBACK';
            mlJsonp(url, function (data) {
                callback(data);
            });
        },
       // top250
        getTop250: function (start, count, callback) {
            var url = 'http://api.douban.com/v2/movie/top250?start='
                       +start+'&count='+count+'&callback=JSON_CALLBACK';
            mlJsonp(url, function (data) {
                callback(data);
            });
        },
        //电影详情
        getSubject: function (id, callback) {
            var url = 'http://api.douban.com/v2/movie/subject/'
                      +id+'?&callback=JSON_CALLBACK';
            mlJsonp(url, function (data) {
                callback(data);
            });
        }
    }
});