const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 5500

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

app.post('/requestdata', (req, res) => {
    let headers = req.headers;

})

app.listen(PORT);