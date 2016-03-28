var mod = angular.module('response.controllers.causeMaker', []);


mod.controller('CreateCauseCtrl', function ($scope,
                                            FIREBASE_URL,
                                            $stateParams,
                                            $state,
                                            $stateParams,
                                            $q,
                                            EventsService,
                                            $firebaseArray,
                                            $ionicScrollDelegate,
                                            UserService,
                                            $localstorage) {

  var self=this;
	var ref = new Firebase(FIREBASE_URL);
	var causesRef = new Firebase(FIREBASE_URL + "/cause");

  var causes = {};


	$scope.$on("$ionicView.loaded", function () {

    		console.log("This is getting new causes every load:");

//   $scope.theCauses = UserService.causes;
    console.log("da nem is:" + $scope.theCauses)

	});


  //$scope.theCauses = getSettings.getCause();

  $scope.data = {
		causelist: [],
		causename: '',
		description: '',
		searchterms: '',
		volunteeremails: '',
		respondersemails: ''
	};

  $scope.settings = {
    loading: true,
		showInfo: false,
    isVolunteer: false
  }

	$scope.uploadNewCause = function () {

      var onComplete = function(error) {
      if (error) {
        console.log('nope');
      } else {
        console.log('yep');
        $state.go('tab.account');
      }
};
    causesRef.push().set({
		causename: $scope.data.causename,
		description: $scope.data.description,
		searchterms: $scope.data.searchterms,
		volunteeremails: $scope.data.volunteeremails,
		respondersemails: $scope.data.respondersemails
  },onComplete);

  }


    $scope.isVolunteerChanged = function() {
      $scope.data.isVolunteer = !$scope.data.isVolunteer;
    console.log('Push Notification Change');
    console.log($scope.data.isVolunteer);
  };



});
