/*
* Â·ÓÉ
* */
var app = angular.module('mlist.main',
    ['ngRoute','mlist.controllers.movieDetail','mlist.controllers.movieList']);
app.config(function($routeProvider){
    $routeProvider
        //·ÃÎÊÁÐ±íÒ³
        .when('/list/:category/:page',{
            templateUrl:"movie_list/list_template.html",
            controller:"MovieListController",
        })
        //·ÃÎÊÏêÏ¸Ò³
        .when('/detail/:id',{
            templateUrl:"movie_detail/detail_template.html",
            controller:"MovieDetailController",
        })
        //Ä¬ÈÏ·ÃÎÊÂ·¾¶
        .otherwise({
            redirectTo:"/list/top250/1"
        })
});