const offer = require('../controllers/BEoffer.js')


module.exports = function(app){
  app.post('/offer', offer.index)
}
