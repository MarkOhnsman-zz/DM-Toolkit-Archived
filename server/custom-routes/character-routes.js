let Characters = require('../models/character')


module.exports = {
    userCharacters: {
    path: '/userCharacters',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Characters'
      Characters.find({creatorId: req.session.uid})
        .then(characters => {
          res.send(handleResponse(action, characters))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
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


