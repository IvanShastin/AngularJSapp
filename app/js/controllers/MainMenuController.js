/**
 * Created by ivanshastin on 27/02/16.
 */
'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location){
        $scope.createEvent = function(){
            $location.url('/newEvent');
        }
});