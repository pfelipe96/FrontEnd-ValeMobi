angular.module('starter.controllers', [])

// DashBoard
.controller('dashBoardController', function($scope, $http, $route) {

  $scope.listaDados =
  [
    {cM : 'CD01', tM : 'Títulos Privados', nM : 'CDB', pM : 30.99},
    {cM : 'CD02', tM : 'Carteira ADM', nM: 'Fundo de Investimentos', pM : 40.99},
    {cM : 'CD03', tM : 'Títulos Públicos', nM : 'Tesouro Direto', pM: 30.11},
  ];

  // Recuperar lista do DataBase
  $http.get('http://localhost:3000/recuperar-negociacoes').then(function(resposta){
    $scope.obterLista = resposta.data;
  });

  // Enviar os dados para o DataBase
  $scope.finalizar = function (dados) {
    $http.post('http://localhost:3000/negociacao', dados).then(function(resposta){
      console.log("Funcao funcionando")
    });
    $route.reload('/');
  };
});
