var mod = angular.module('response.controllers.events', []);



mod.controller('EventsCtrl', function ($scope,
                                     FIREBASE_URL,
                                     $stateParams,
                                     EventsService,
                                     $firebaseArray,
                                     $ionicScrollDelegate,
                                     UserService, $localstorage) {
	$scope.user = UserService;


  $scope.username = $scope.user.current.name

	$scope.eventLoop = EventsService["events"];
  $scope.eventId = $stateParams.eventId;
  console.log('$stateParams.eventId'+ $stateParams.eventId);
  $scope.event = EventsService.getEvent(parseInt($scope.eventId))

	$scope.data = {
		messages: [],
		message: '',
		loading: true,
		showInfo: false
	};

	var messagesRef = new Firebase(FIREBASE_URL);
  console.log("load-DING");

	$scope.loadMessages = function () {
    console.log("trying load");
    var query = messagesRef
    .child("messages")
    .orderByChild("eventId")
    .equalTo($scope.eventId)
    .limitToLast(200);

    $scope.data.messages = $firebaseArray(query);
    $scope.data.messages.$loaded().then(function(data){
    console.log("Angularfire is $loaded");
    $scope.data.loading = false;
  })

  $ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
  };

	$scope.sendMessage = function () {
    console.log("zen-DING");

    if ($scope.data.message) {
      $scope.data.messages.$add({
        eventId: $scope.eventId,
        text: $scope.data.message,
        username: $scope.user.current.name,
        userId: $scope.user.current.userId,
        profilePic: $scope.user.current.profilePic,
        timestamp: new Date().getTime()
      })
      $ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
      $scope.data.message = "";
    }
  };

	console.log("ShowCtrl-Created");

    $scope.isLoggedIn = $localstorage.get('firstTime', null);
    		console.log("User login clause is this events:");
				console.debug($scope.isLoggedIn);
	  $scope.$on("$ionicView.enter", function () {
    console.log($scope.user.current.name)
    $ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
		console.log("ShowCtrl-Enter");
	});

	$scope.$on("$ionicView.beforeLeave", function () {
		console.log("ShowCtrl-Leave");
	});

$scope.loadMessages();

});
