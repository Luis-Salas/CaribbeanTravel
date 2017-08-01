;(function () {
  'use strict'
angular
.module('myApp')
.controller('offerController', Controller)
function Controller(offerFactory, $location,$routeParams){
  var self = this
  self.index = function(){
    console.log(self.offer)
    offerFactory.index(self.offer,function(data){
      console.log(data)
    })
  }
}
})()
