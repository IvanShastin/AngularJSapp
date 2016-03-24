'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource','ngRoute'])
    .config(function($routeProvider, $locationProvider){
       $routeProvider.when('/newEvent',
           {
               templateUrl: 'templates/NewEvent.html',
               controller: 'EditEventController'
           });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve:{
                    event: function($route, eventData){
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.otherwise({redirectTo: '/events'});

        $routeProvider.when('/editProfile',
            {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            });

        $locationProvider.html5Mode(true);
    });