var soccerApp = angular.module('soccerApp',[]);

soccerApp.controller('ListCtrl',['$scope','$http',
    function($scope,$http) {
        $http.get('http://104.236.115.227/football-api/teams/').success( function(data) {
        //$http.get('https://api.github.com/repos/angular/angular.js/issues/10').success( function(data) {        
            $scope.players = data;
        });
        
        
        
    }]);