const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
  time: { type: Number, default: 0 , required: true},
  airline: { type: String, required: true},
  destination: { type: String, required: true, minlength: 2},
  day: { type: Date, required: true}
}, { timestamps: true })

mongoose.model('Visit', offerSchema)
