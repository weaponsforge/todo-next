const Todo = require('./todo')
const TD = new Todo()

module.exports.createtodo = TD.createtodo.bind(TD)
module.exports.updatetodo = TD.updatetodo.bind(TD)
module.exports.deletetodo = TD.deletetodo.bind(TD)
module.exports.gettodo = TD.gettodo.bind(TD)
module.exports.listtodos = TD.listtodos.bind(TD)
