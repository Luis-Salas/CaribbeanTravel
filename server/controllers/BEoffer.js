const mongoose = require('mongoose')
const Offer = mongoose.model('Offer')

function BEoffer(){
  this.index = function(req,res){
    console.log(req.body.datesAvailable)
    var offer = new Offer({
      price: req.body.price,
      description: req.body.datesAvailable,
      airline: req.body.airline,
      destination: req.body.destination
    })
    console.log(offer)
    offer.save(function(err){
      console.log('saved')
      if(err)res.json(err)
      else res.json(offer)
    })
  }
}
module.exports = new BEoffer()
