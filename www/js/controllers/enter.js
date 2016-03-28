var mod = angular.module('response.controllers.enter', []);

mod.controller('EnterCtrl', function ($scope, $state, UserService) {
$state.go('tab.events');
});
