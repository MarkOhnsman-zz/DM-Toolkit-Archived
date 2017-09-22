let Characters = require('../models/character')
let Backgrounds = require('../models/background')
let Races = require('../models/race')


module.exports = {
  userCharacters: {
    path: '/userCharacters',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find User Characters'
      Characters.find({ creatorId: req.session.uid })
        .then(characters => {
          res.send(handleResponse(action, characters))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  generateNPC: {
    path: '/newNPC',
    reqType: 'post',
    method(req, res, next) {
      let action = 'Generate New NPC'
      let npc = {}
      let background;
      let race;
      //assigns race
      if (req.body.race) {
        Races.findOne({ name: req.body.race }).then(r => {
          race = r
        })
      }
      else {
        Races.find({}).then(r => {
          let rIndex = Math.floor(Math.random() * (r.length - 1))
          race = r[rIndex]

        })
      }
      //assigns background
      if (req.body.background) {
        Races.findOne({ name: req.body.background }).then(b => {
          background = b
        })
      }
      else {
        Backgrounds.find({}).then(b => {
          let bIndex = Math.floor(Math.random() * (b.length - 1))
          background = b[bIndex]
        })
      }
      mapNPC(npc, race, background)

      res.send(handleResponse(action, npc))
    }
  }
}



function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}


function mapNPC(npc, race, background) {
  //maps race
  npc.race = race.name
  npc.raceDescription = race.description
  npc.ability = race.ability
  npc.age = Math.floor(Math.random() * (race.age[1] - race.age[0]) + race.age[0])
  npc.speed = race.speed
  npc.languages = race.languages
  npc.racials = race.racials
  let subRaces = Object.keys(race.sub)
  let subIndex = Math.floor(Math.random() * (subRaces.length - 1))
  npc.sub = race.sub[subIndex]

  //maps background
  npc.background = background.name
  npc.backgroundDescription = background.description
  npc.feature = background.feature
  npc.tools = background.tools
  npc.skills = background.skills
  npc.equipment = background.equipment

  let traitIndex = Math.floor(Math.random() * (background.traits.length - 1))
  npc.trait = background.traits[traitIndex]
  let idealIndex = Math.floor(Math.random() * (background.ideals.length - 1))
  npc.ideal = background.ideals[idealsIndex]
  let bondIndex = Math.floor(Math.random() * (background.bonds.length - 1))
  npc.bond = background.bonds[bondIndex]
  let flawIndex = Math.floor(Math.random() * (background.flaws.length - 1))
  npc.flaw = background.flaws[flawIndex]
}

