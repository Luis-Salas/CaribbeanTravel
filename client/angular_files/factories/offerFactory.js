(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('offerFactory', factory)

  function factory($http){
    var factory = {}

    factory.index = function(data){
      console.log(data)
      $http.post('/offers', data).then(function(returnData){

      })
    }
    return factory
}
})()
