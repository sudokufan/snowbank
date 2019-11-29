const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'
const dbname = 'squabank'
const Client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})

const connectToDb = (cb) => {
    Client.connect(() => {
        let db = Client.db(dbname)
        cb(db)
    })
}

module.exports = connectToDb