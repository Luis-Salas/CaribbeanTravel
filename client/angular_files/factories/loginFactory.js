console.log('aslfkjaslfkj');
(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('offerFactory', factory)

  function factory($http){
    var factory = {}

    factory.index = function(data,callback){
      console.log(data)
      $http.post('/offer', data).then(function(data){
        console.log(data)
        callback(data)
      })
    }
    return factory
}
})()
