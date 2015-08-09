var app = angular.module('palestranteModule', ['dataSourceModule']);

app.controller('PalestranteController', function ($scope, $filter, $routeParams, DataSourceService) {

    $scope.$emit('backButtonChange', {
        backbutton: true
    });

    DataSourceService.getPeople(function (data) {
        $scope.people = $filter('filter')(data, {
            _id: $routeParams.id
        })[0];
    });
});