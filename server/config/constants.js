const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  user: {
    name: "User",
    endpoint: 'users',
    preventDefaultApi: false,
    useCustomRoutes: false
  },
  background: {
    name: 'Background',
    endpoint: 'backgrounds'
  },
  character: {
    name: 'Character',
    endpoint: 'characters',
    useCustomRoutes: true,
    //preventDefaultApi: true
  },
  race: {
    name: 'Race',
    endpoint: 'races'
  }
}

module.exports = {
  actions,
  models
}