const getAccounts = (db, callback) => {
    var collection = db.collection('accounts')
    collection.find({}).toArray((err, docs) => {
        callback(docs)
    })
}

module.exports.getAccounts = getAccounts