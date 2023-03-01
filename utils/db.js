const mongo = require('mongodb')

const client = new mongo.MongoClient("mongodb://volte:qwertyuiop@194.195.117.230:27017/mrits").on('error', (err) => {
    console.log(err)
})
const db = client.db('mrits')

module.exports = db