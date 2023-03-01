const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('../utils/db')

const PORT = 80

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use((err, req, res, next) => {
    res.send("Error: invalid JSON object sent.");
})

app.get('/', (req, res) => {
    res.send("Hello, world!")
})

app.post('/', (req, res) => {
    console.log(req.body)
    let creds = req.body;

})

app.get('/requestdata', async (req, res) => {
    let data = await db.collection('PreMonsoonWaterData').find().toArray();
    res.status(200).json({
        status: "success",
        data: data
    });
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});