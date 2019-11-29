const getAccounts = (db, cb) => {
    let collection = db.collection('accounts')
    collection.find({}).toArray((err, docs) => {
        cb(docs)
    })
}

const createAccount = (db, newAccountInfo, cb) => {
    let collection = db.collection('accounts')
    collection.insertOne(newAccountInfo, (err, results) => {
        cb(results)
    })
}

const getAccountsUnderGivenAmount = (db, balance, cb) => {
    let collection = db.collection('accounts')
    collection.find({balance: {$lt: balance}}).toArray((err, docs) => {
        cb(docs)
    })
}

const getAccountsOverGivenAmount = (db, balance, cb) => {
    let collection = db.collection('accounts')
    collection.find({balance: {$gt: balance}}).toArray((err, docs) => {
        cb(docs)
    })
}

module.exports.getAccounts = getAccounts
module.exports.createAccount = createAccount
module.exports.getAccountsUnderGivenAmount = getAccountsUnderGivenAmount
module.exports.getAccountsOverGivenAmount = getAccountsOverGivenAmount
