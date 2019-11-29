const AccountsController = require('../Controllers/AccountsController')

const routes = (app) => {

    app.get('/accounts', AccountsController.getAccounts)
}

module.exports = routes