(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('offerFactory', factory)

  function factory($http){
    var factory = {}

    factory.index = function(data){
      console.log('here')
      console.log(data)
    }
    return factory
}
})()
