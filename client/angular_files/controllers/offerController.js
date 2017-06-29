;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('offerController', Controller)

  function Controller(offerFactory, $location, $routeParams, $scope) {
    var self = this
    self.index = function(){
      offerFactory.index(self.offer, function(returnData){
        console.log(returnData)
      })
  }
}
})()
