/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mod = angular.module('response.controllers.responseD', []);



mod.controller('ResonseDCtrl', function ($scope,
                                     FIREBASE_URL,
                                     $stateParams,
                                     EventsService,
                                     $firebaseArray,
                                     $ionicScrollDelegate,
                                     UserService, $localstorage) {
                                         
                                         
                                        
    var eId = $stateParams.event;
    
    if (eId === 1) {
      
        $scope.title = "Fund a school on go fundme";
    } else if (eId === 2) {
        $scope.title = "Pray for victems";
    } else if (eId === 3) {
        $scope.title = "Call my mom.";
    }
    
    
    
    
    
                                     });