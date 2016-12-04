var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: '/partials/home.html'})
  .when('/dashboard', {templateUrl: '/partials/dashboard.html'})
  .when('/topic/:id', {templateUrl: 'partials/topicpage.html'})
  .when('/user/:id', {templateUrl: 'partials/userpage.html'})
  .otherwise({redirectTo: '/'})

})
