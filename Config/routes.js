const AccountsController = require('../Controllers/AccountsController')

const routes = (app) => {

    app.get('/accounts/:balance/lessthan', AccountsController.retrieveAccountsUnderGivenAmount)

    app.get('/accounts/:balance/morethan', AccountsController.retrieveAccountsOverGivenAmount)

    app.get('/accounts', AccountsController.getAccounts)

    app.post('/accounts', AccountsController.createAccount)

}

module.exports = routes
