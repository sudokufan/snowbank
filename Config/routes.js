const AccountsController = require('../Controllers/AccountsController')

const routes = (app) => {

    app.post('/accounts', AccountsController.createAccount)
}

module.exports = routes