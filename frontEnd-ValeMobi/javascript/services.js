var app = angular.module('starter.services', []);

app.factory('InvestidoresServices', function() {

  var listaInvestidores = [];

  return {
    gravar: function (dados) {
      listaInvestidores = dados;
    },

    todos: function() {
      return listaInvestidores;
    },

    um: function(id) {
      for (var i = 0; i < listaInvestidores.length; i++) {
        if (listaInvestidores[i]._id == id) {
          return listaInvestidores[i];
        }
      }
      return null;
    }
  }
});
