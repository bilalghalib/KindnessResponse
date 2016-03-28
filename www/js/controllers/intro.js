var mod = angular.module('response.controllers.intro', []);

mod.controller('IntroCtrl', function ($scope, $state, UserService, $localstorage) {

    $scope.step2 = {};
    $scope.step3 = {};
    $scope.isLoggedIn = false;
    $scope.words = "words";

    function persistWizardData() {
        // set flag to indicate wizard has been run

			  $localstorage.set('firstTime', true);

        // save additional data
    }

    $scope.startCondition = function() {
        return angular.isDefined($scope.step3.something);
    };



	$scope.$on("$ionicView.loaded", function () {

        $scope.isLoggedIn = $localstorage.get('firstTime', null);
    		console.log("User login clause is this:");
				console.debug($scope.isLoggedIn);
        if($scope.isLoggedIn) {
          $state.go('tab.events');
        }
		console.log("Here we check to see if user is logged in");
	});



	$scope.loggingIn = false;

	$scope.login = function () {

		if (!$scope.loggingIn) {
			$scope.loggingIn = true;
			UserService.loginUser().then(function () {
          persistWizardData();
        		console.log("Persist the data");

					$scope.loggingIn = false;
			    $state.go('tab.events');
		   });
		}
	}
});
