const AccountsController = require('../Controllers/AccountsController')

const routes = (app) => {

    app.get('/accounts', AccountsController.getAccounts)

    app.post('/accounts', AccountsController.createAccount)

}

module.exports = routes
