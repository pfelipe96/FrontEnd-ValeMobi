var app = angular.module('starter',['ngRoute', 'starter.controllers']);

app.config(function($routeProvider, $locationProvider)
{

    // remove o # da url
    $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
    });

   $routeProvider
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'views/dashBoard.html',
      controller  : 'dashBoardController',
   })

   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});
