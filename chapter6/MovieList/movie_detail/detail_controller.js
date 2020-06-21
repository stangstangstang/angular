/*
* 电影详情-控制器
* */
var detail = angular.module('mlist.controllers.movieDetail', ['mlist.model']);
detail.controller('MovieDetailController', function ($scope, $routeParams, mlModel) {
    $scope.name = 'detail';
    // 影片的id
    var subjectId = $routeParams.id;
    //调用Model层获取电影详情的方法
    mlModel.getSubject(subjectId, function (data) {
        //将获取的数据放到作用域上
        $scope.data = data;
    });
}); 