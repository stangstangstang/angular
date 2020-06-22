/*
* 电影列表的控制器
* */
var detail = angular.module('mlist.controllers.movieList',
    ['mlist.services.config', 'mlist.model']);
detail.controller('MovieListController', function ($scope, $routeParams, mlConfig, mlModel) {
    $scope.name = 'list';
    $scope.params = $routeParams;
    // 获取列表的类别
    var category = $routeParams.category;
    // 获取列表的当前页
    var page = $routeParams.page - 0;
    // 每页多少条数据
    var countPerPage = mlConfig.getCountPerPage();
    //从第几条数据开始
    var start = countPerPage * (page - 1);
    // pager对象存储了页面的各种信息
    var pager = $scope.pager = {
        curr: page,
    };
    //翻页操作
    $scope.pages = function(data){
        pager.max = Math.ceil(data.total / countPerPage);
        pager.prev = page - 1 > 0 ? page - 1 : 1; // 不能翻到第0页;
        pager.next = page + 1 >= pager.max ? pager.max : page + 1; // 不能翻过最后一页
        $scope.loading = false;
    }
    // 代表数据正在加载
    $scope.loading = true;
    switch (category) {
        case 'top250':
            mlModel.getTop250(start, countPerPage, function (data) {
                $scope.data = data;
                pager.category = 'top250';
                $scope.pages(data);
            });
            break;
        case 'coming_soon':
            mlModel.getComingSoon(start, countPerPage, function (data) {
                $scope.data = data;
                pager.category = 'coming_soon';
                $scope.pages(data);
            });
            break;
        case 'in_theaters':
            mlModel.getInTheaters(start, countPerPage, function (data) {
                $scope.data = data;
                pager.category = 'in_theaters';
                $scope.pages(data);
            });
            break;
    }

});