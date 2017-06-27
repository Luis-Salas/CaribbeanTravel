;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('offerController', Controller)

  function Controller(offerFactory, $location, $routeParams) {
    var self = this
    self.index = function(){
      data = "hi"
      offerFactory.index(data, function(returnData){
      })
      console.log('hi')
  }
}
})()
