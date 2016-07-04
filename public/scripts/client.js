console.log( 'bravo' );
////figure out some angular.
var myApp = angular.module( 'myApp', ['ngRoute']);
/// Routes ///
myApp.config(['$routeProvider', function ($routeProvider) {

 $routeProvider
   .when('/signUp', {
     templateUrl: '/views/signUp.html',
     controller: "signUpController"
   })
   .when('/index', {
     templateUrl: '/views/index.html',
     controller: "indexController"
   })
   .when('/failure', {
     templateUrl: '/views/failure.html',
     controller: "failureController"
   })
   .when('/success', {
     templateUrl: '/views/success.html',
     controller: "successController"
   });
 }]);//end of myapp confug
