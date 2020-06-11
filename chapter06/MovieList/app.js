/*
* 路由
* */
var app = angular.module('mlist.main',
    ['ngRoute','mlist.controllers.movieDetail','mlist.controllers.movieList']);
app.config(function($routeProvider){
    $routeProvider
        //访问列表页
        .when('/list/:category/:page',{
            templateUrl:"movie_list/list_template.html",
            controller:"MovieListController",
        })
        //访问详细页
        .when('/detail/:id',{
            templateUrl:"movie_detail/detail_template.html",
            controller:"MovieDetailController",
        })
        //默认访问路径
        .otherwise({
            redirectTo:"/list/top250/1"
        })
});