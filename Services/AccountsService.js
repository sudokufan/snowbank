const getAccounts = (db, callback) => {
    let collection = db.collection('accounts')
    collection.find({}).toArray((err, docs) => {
        callback(docs)
    })
}

const createAccount = (db, newAccountInfo) => {
    let collection = db.collection('accounts')
    collection.insertOne(newAccountInfo)
}

module.exports.getAccounts = getAccounts
module.exports.createAccount = createAccount