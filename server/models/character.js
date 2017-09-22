var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    creatorId: { type: ObjectId, ref: models.user.name, required: true },

    //background details
    background: { type: String, required: true },
    backgroundDescription: { type: String },
    feature: { type: Object, required: true, default: {} },
    tools: { type: Array, default: [] },
    skills: { type: Array, required: true, default: [] },
    equipment: { type: Array, required: true, default: [] },

    extra: { type: String },
    trait: { type: String },
    ideal: { type: Object },
    bond: { type: String },
    flaw: { type: String },

    ///Racial Traits
    race: { type: String, required: true },
    raceDescription: { type: String },
    ability: { type: Object },
    age: { type: Number },
    speed: { type: Number },
    languages: { type: Array },
    racials: { type: Object },
    sub: { type: Object },

    //additional stats
    gender: { type: String },
    height: { type: String },
    weight: { type: String }

});

module.exports = mongoose.model(models.character.name, schema);