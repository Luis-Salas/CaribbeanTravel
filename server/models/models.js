const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
  times: { type: Number, default: 0 , required: true},
}, { timestamps: true })

mongoose.model('Visit', offerSchema)
