var app = angular.module('dataSourceModule', []);

app.factory('DataSourceService', function ($http) {
    var obj = {};
    var people;
    var firstRequest = true;


    obj.getPeople = function (callback) {
        if (firstRequest) {
            firstRequest = false;
            $http.get('http://www.json-generator.com/api/json/get/bHWkjxpcfC?indent=2')
                .success(function (data) {
                    people = data;
                    callback(data);
                }).error(function () {

                })
        } else {
            callback(people);
        }
    }

    return obj;
});