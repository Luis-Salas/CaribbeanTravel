(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('createUserFactory', factory)

  function factory($http){
    var factory = {}

    factory.index = function(){
      console.log(mailInfo)
    }
    return factory
}
})()
