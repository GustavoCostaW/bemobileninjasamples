var app = angular.module('listaModule', ['dataSourceModule']);

app.controller('ListaController', function ($scope, DataSourceService, $location) {
    
    
    $scope.$emit('backButtonChange', {
        backbutton: false
    });


    DataSourceService.getPeople(function (data) {
        $scope.peoples = data;
    });

    $scope.routeTo = function (id) {
        $location.path("palestrante/" + id);
    }
});