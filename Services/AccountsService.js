const getAccounts = (db, callback) => {
    let collection = db.collection('accounts')
    collection.find({}).toArray((err, docs) => {
        callback(docs)
    })
}

const createAccount = (db, newAccountInfo, cb) => {
    let collection = db.collection('accounts')
    collection.insertOne(newAccountInfo, (err, results) => {
        cb(results)
    })
}

const retrieveAccountsUnderGivenAmount = (db, balance, cb) => {
    let collection = db.collection('accounts')
    collection.find({balance: {$lt: balance}}).toArray((err, docs) => {
        cb(docs)
    })
}

const retrieveAccountsOverGivenAmount = (db, balance, cb) => {
    let collection = db.collection('accounts')
    collection.find({balance: {$gt: balance}}).toArray((err, docs) => {
        cb(docs)
    })
}

module.exports.getAccounts = getAccounts
module.exports.createAccount = createAccount
module.exports.retrieveAccountsUnderGivenAmount = retrieveAccountsUnderGivenAmount
module.exports.retrieveAccountsOverGivenAmount = retrieveAccountsOverGivenAmount