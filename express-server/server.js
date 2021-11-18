const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

const PORT = 8000;

const jsonDB = require('./test_freeboard.json')
console.log("jsonDB", jsonDB)



app.get('/', cors() ,function(req,res){
    console.log("req /json")
    res.json(jsonDB);
})

app.listen(PORT, function(){
    console.log('Express is listening port:' + PORT + '!');
})
