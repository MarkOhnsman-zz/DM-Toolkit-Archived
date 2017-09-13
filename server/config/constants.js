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
  race: {
    name: 'Race',
    endpoint: 'races'
  }
}

module.exports = {
  actions,
  models
}