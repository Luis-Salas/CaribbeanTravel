const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
  price: { type: String, required: true},
  airline: { type: String, required: true},
  destination: { type: String, required: true},
  description: { type: String, required: true},
}, { timestamps: true })
mongoose.model('Offer', offerSchema)
