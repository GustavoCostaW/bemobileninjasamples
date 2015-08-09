var app = angular.module('myApp', ['ngRoute', 'ngAria', 'ngAnimate', 'ngMaterial', 'listaModule', 'palestranteModule', 'dataSourceModule']);

app.controller('AppController', function ($scope, $window) {
    $scope.backbutton = false;

    $scope.$on('backButtonChange', function (e, args) {
        $scope.backbutton = args.backbutton;
    })

    $scope.backButtonEvent = function () {
        $window.history.back();
    }
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/lista', {
            templateUrl: 'app_modules/listaModule/lista.html',
            controller: 'ListaController'
        }).when('/palestrante/:id', {
            templateUrl: 'app_modules/palestranteModule/palestrante.html',
            controller: 'PalestranteController'
        }).otherwise({
            redirectTo: '/lista'
        })
})