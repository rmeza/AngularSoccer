/*var soccerApp = angular.module('soccerApp',[]);

soccerApp.controller('ListCtrl',['$scope','$http',
    function($scope,$http) {
        $http.get('http://104.236.115.227/football-api/teams/').success( function(data) {
        //$http.get('https://api.github.com/repos/angular/angular.js/issues/10').success( function(data) {        
            $scope.players = data;
        });
        
        
        
    }]);*/

//var app = angular.module('myApp', []);
(function(){
	
	angular.module('controllers',[])
	.controller('ctrlCustomer', function ($scope, $http) {
		//call to web API
		var server = 'http://localhost:51671';
		var Url = server +'/api/Customer/getAllCustomers'
		$http({
			method: 'GET',
			url: Url
		}).success(function (customerList) {
			$scope.AllCustomer = customerList;
		}).error(function () {
			console.log('An error in getAllCustomer');
		});

		$scope.GetCustomerByCustomerID = function (customerID) {
			//Call to web API
			var Url = '/api/Customer/getCustomerByCustomerID';
			$http({
				method: 'GET',
				url: Url,
				params: { customerID: customerID }
			}).success(function (customerList) {
				$scope.CustomerByID = customerList;
			}).error(function () {
				cosole.log('error in GetCustomerByCustomerID')
			});
		}

	});

})();