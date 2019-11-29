const DbService = require('../Services/DbService')
const AccountsService = require('../Services/AccountsService')

const getAccounts = (req, res) => {
    DbService((db) => {
        AccountsService.getAccounts(db, (docs) => {
            res.json(docs)
        })
    })
}

const retrieveAccountsOverGivenAmount = (req, res) => {
    let balance = req.params.balance
    balance = parseInt(balance)
    DbService((db) => {
        AccountsService.getAccountsOverGivenAmount(db, balance, (docs) => {
            res.json(docs)
        })
    })
}

const retrieveAccountsUnderGivenAmount = (req, res) => {
    let balance = req.params.balance
    balance = parseInt(balance)
    DbService((db) => {
        AccountsService.getAccountsUnderGivenAmount(db, balance, (docs) => {
            res.json(docs)
        })
    })
}

const createAccount = (req, res) => {
    let accountHolderName = req.body.name
    let accountBalance = req.body.balance

    let newAccountInfo = {
        name: accountHolderName,
        balance: accountBalance
    }

    DbService((db) => {
        AccountsService.createAccount(db, newAccountInfo, (result) => {
            if (result.insertedCount) {
                res.send('account created successfully')
            } else {
                res.send('account was not created, check with administrator')
            }
        })
    })
}

module.exports.getAccounts = getAccounts
module.exports.createAccount = createAccount
module.exports.getAccountsOverGivenAmount = getAccountsOverGivenAmount
module.exports.getAccountsUnderGivenAmount = getAccountsUnderGivenAmount
