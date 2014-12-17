# This line is related to our Angular app, not to our
# HomeCtrl specifically. This is basically how we tell
# Angular about the existence of our application.
@restauranteur = angular.module('restauranteur', ['ngRoute'])

@restauranteur.config(['$routeProvider', ($routeProvider)-> 
  $routeProvider.
    otherwise({
      templateUrl: '../templates/home.html',
      controller: 'HomeCtrl'
    })
])