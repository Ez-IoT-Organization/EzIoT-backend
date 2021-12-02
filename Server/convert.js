// Requires npm install xml2json 
fs = require('fs');
var parser = require('xml2json');

fs.readFile( '/tmp/contenedor.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log(json);
 });
