;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('offerController', Controller)

  function Controller(offerFactory, $location, $routeParams, $scope) {
    var self = this
    self.index = function(){
      console.log(self.offer)
      var data = "hi"
      offerFactory.index(data, function(returnData){
      })
      console.log('hi')
  }
}
})()
