const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

const PORT = 8000;

const jsonDB = require('./test_freeboard.json')
console.log(jsonDB["resultset"]["row"][0]["field"][1]["$t"])

const locationTest = () => {
    //Worked perfectly
    const location = jsonDB["resultset"]["row"][0]["field"][1]["$t"]
    const split1 = location.split(' | ')
    const lat = location.split(' | ')[0].split('x=')[1]
    const long = location.split(' | ')[1].split('y=')[1]
    const test = location.split(' | ')[1].split('y=')[1]
    console.log("lat y long", split1, lat, long, test)
}
locationTest()

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
