const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 5500

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send("Hello, world!")
})

app.post('/', (req,res)=> {
    console.log(req.body)
    let data = req.body;
    let arr = []
    for(var element in data) {
        arr += element;
    }
    res.send(data);
})

app.listen(PORT);
