var myApp = angular.module('myApp', []);

myApp.controller('myAppList', function myAppList($scope) {

	$scope.markers = [];

	var createMarker = function(dataPart, i) {
		var marker = {
			index: i,
			name: dataPart["name"],
			type: dataPart["type"],
			population: dataPart["population"],
			wealth: dataPart["wealth"],
			authority: dataPart["authority"],
			numGuards: dataPart["numGuards"],
			x: dataPart["position"][0],
			y: dataPart["position"][1]		
		};
		$scope.markers.push(marker);
	}

	$scope.displayInfo = function(data) {
		i = data["marker"]["index"];
		
		angular.element(document.querySelectorAll('.marker')).removeClass('clicked');
		angular.element(document.querySelector('#marker'+i)).addClass('clicked');
		angular.element(document.querySelector('.info')).addClass('show');
		
		$scope.selectedName = data["marker"]["name"];
		$scope.selectedType = data["marker"]["type"];
		$scope.selectedPop = data["marker"]["population"];
		$scope.selectedWealth = data["marker"]["wealth"];
		$scope.selectedAuth = data["marker"]["authority"];
		$scope.selectedGuards = data["marker"]["numGuards"];
	}
	
	$scope.hideInfo = function() {
		angular.element(document.querySelectorAll('.marker')).removeClass('clicked');
		angular.element(document.querySelector('.info')).removeClass('show');	
	}

	$scope.myData = nearmap_data;
	for (i = 0; i < $scope.myData.length; i++) {
		createMarker($scope.myData[i], i);
	}
});
