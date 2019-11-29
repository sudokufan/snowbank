const DbService = require('../Services/DbService')
const AccountsService = require('../Services/AccountsService')

const getAccounts = (req, res) => {
    DbService((db) => {
        AccountsService.getAccounts(db, (documents) => {
            res.json(documents)
        })
    })
}

module.exports.getAccounts = getAccounts