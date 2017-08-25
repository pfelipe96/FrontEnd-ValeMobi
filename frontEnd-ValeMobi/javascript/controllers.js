angular.module('starter.controllers', [])

// Login
.controller('LoginController', function($scope, $state) {

  $scope.login = function () {
      $state.go('investidores');
      console.log("Funcao funcionando")
  };
})

// Investidores da astra
.controller('InvestidoresController', function($scope, $state, InvestidoresServices, $http, $stateParams) {

  $http.get('http://localhost:3000/recuperar-investidores').then(function(resposta){
    InvestidoresServices.gravar(resposta.data);
    $scope.investidores = resposta.data;
  });

  $scope.apagarInvestidor = function(dados) {
    $http.post('http://localhost:3000/deletar-investidor/'+ dados._id).then(function(resposta){
      console.log("Funcao funcionando");
      console.log(dados);
    });
    $state.reload('investidores');
  };

  $scope.cadastrarInvestidor = function () {
    $state.go('cadastro-investidor');
  };
})

// Cadastrar Investidores
.controller('CadastroInvestidorController', function($scope, $state, $http) {
  $scope.dados = {};

  // var transformDateNasc = $scope.dados.dataNasc.getDate() + "/" + ($scope.dados.dataNasc.getMonth()+1) + "/" +$scope.dados.dataNasc.getFullYear();
  // $scope.dados.dataNasc = transformDateNasc;
  // var transformDateInvest = $scope.dados.dataInvestimento.getDate() + "/" + ($scope.dados.dataInvestimento.getMonth()+1) + "/" +$scope.dados.dataInvestimento.getFullYear();
  // $scope.dados.dataInvestimento = transformDateInvest;

  // Enviar os dados para o DataBase
  $scope.adicionarInvestidor = function () {
    $http.post('http://localhost:3000/cadastrar-investidor', $scope.dados).then(function(resposta){
      $state.go('investidores');
      console.log("Funcao funcionando")
    });
  };

  $scope.buttonBack  = function () {
      $state.go('investidores');
      console.log("Funcao funcionando");
  };
})

// Detalhe do investidor selecionado
.controller('DetalheInvestidorController', function($scope, $state, $stateParams, $http) {

  $http.get('http://localhost:3000/recuperar-investidor/' + $stateParams.id).then(function(resposta){
    $scope.investidor = resposta.data;
    console.log($scope.investidor);
  });

  $scope.buttonBack = function (){
    $state.go('investidores');
  };

  $scope.buttonSearchValor  = function () {
    $state.go('detalhe-ValorAtual');
  };

})

// Detalher do historico do investidor selecionado
.controller('DetalheValorAtualController', function($scope, $state) {
  $scope.buttonBack  = function () {
    $state.go('detalhe-investidor');
  };

})

.controller('HeaderController', function($scope, $state) {
});
