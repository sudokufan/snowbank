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

module.exports.getAccounts = getAccounts
module.exports.createAccount = createAccount