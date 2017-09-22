var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  feature: {type: Object, required: true, default: []}, //send whole object
  extra: {type: Array, type: []}, // send one of 
  tools: {type: Array, required: true, default: []}, //send all
  skills: {type: Array, required: true, default: []}, // send all
  equipment: {type: Array, required: true, default: []}, // send all

  
  traits: {type: Array, required: true, default: []}, // send one string
  ideals: {type: Array, required: true, default: []}, // send one object
  bonds: {type: Array, required: true, default: []}, // send one string
  flaws: {type: Array, required: true, default: []},   //send one string 
});

module.exports = mongoose.model(models.background.name, schema);