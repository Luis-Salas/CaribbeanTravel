const offer = require('../controllers/offersBE.js')


module.exports = function(app){
  app.post('/offers', offer.index)
}
