var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  ability: {type: Object, required: true, default: {}},
  age: {type: Array, required: true, type: []}, //redefine in build
  speed: {type: Number, default: 20},
  languages: {type: Array, required: true, default: []},
  racials: {type: Object, required: true, default: {}},
  sub: {type: Object, required: true, default: {}},
});

module.exports = mongoose.model(models.race.name, schema);