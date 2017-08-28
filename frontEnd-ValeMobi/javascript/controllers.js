angular.module('starter.controllers', [])

// DashBoard
.controller('dashBoardController', function($scope, $http, $route) {

  $scope.listaDados =
  [
    {cM : 'CD01', tM : 'Títulos Privados', nM : 'CDB', pM : 30.99},
    {cM : 'CD02', tM : 'Carteira ADM', nM: 'Fundo de Investimentos', pM : 40.99},
    {cM : 'CD03', tM : 'Títulos Públicos', nM : 'Tesouro Direto', pM: 30.11},
  ];

  $scope.tipoNegociacao =
  [
    {tN : 'Vender'},
    {tN : 'Comprar'}
  ];

  // Recuperar lista do DataBase
  $http.get('http://localhost:3000/recuperar-negociacoes').then(function(resposta){
    var obterLista = resposta.data;
    $scope.obterListaInvertido = obterLista.slice(0).reverse();
    console.log($scope.obterListaInvertido);
  });

  // Enviar os dados para o DataBase
  $scope.finalizar = function (dados, tipoN) {
    var dataNow = new Date;
    var dataNegociacao = String(dataNow.getUTCDate()+"/"+(dataNow.getMonth()+1) +"/"+ dataNow.getUTCFullYear()+" às "+dataNow.getHours()+":"+dataNow.getMinutes()+":"+dataNow.getSeconds());
    dados.tN = tipoN;
    dados.dN = dataNegociacao;

    $http.post('http://localhost:3000/negociacao', dados).then(function(resposta){
        $route.reload('/');
    }, function(resposta){

      if(resposta.status == 403){
        return $scope.erro = "Por favor, preencha todas as lacunas";
      }

      if(reposta.status == 503){
        return $scope.erro = "Tente novamente mais tarde";
      }
    });
  };
});
