const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

const PORT = 8000;

const jsonDB = require('./test_freeboard.json')

const locationTest = () => {
    //Worked perfectly
    const location = "19.283093207526942, -99.13738877457311"
    const split = location.split(', ')
    const lat = split[0]
    const long = split[1]
    console.log(lat, long)
}

const allLocationsTest = () => {
    //Didn't work because freeboard does not receive array of values. Only receives one string
    const lats = jsonDB.map(el => el.ubicacion.split(', ')[0])
    console.log(lats)
}

app.get('/', cors() ,function(req,res){
    console.log("req /json")
    res.json(jsonDB);
})

app.listen(PORT, function(){
    console.log('Express is listening port:' + PORT + '!');
})
