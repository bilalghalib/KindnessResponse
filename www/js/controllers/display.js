var mod = angular.module('response.controllers.display', []);

mod.controller('DisplayEventsCtrl', function(
	$scope,
	$state,
	$stateParams,
	$ionicListDelegate,
	EventsService,
	UserService) {

	$scope.search = {
		'name':''
	};

	$scope.eventService = EventsService;
	$scope.user = UserService;
	
	$scope.username = $scope.user.current.name

	$scope.eventLoop = EventsService["events"];
	$scope.eventId = $stateParams.eventId;
	$scope.event = EventsService.getEvent(parseInt($scope.eventId))

});
