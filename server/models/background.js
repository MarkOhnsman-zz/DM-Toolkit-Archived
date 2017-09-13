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

  //Moving to seperate models
  traits: {type: Array, required: true, default: []}, // send one
  ideals: {type: Array, required: true, default: []}, // send one
  bonds: {type: Array, required: true, default: []}, // send one
  flaws: {type: Array, required: true, default: []},   //send one
});

module.exports = mongoose.model(models.background.name, schema);