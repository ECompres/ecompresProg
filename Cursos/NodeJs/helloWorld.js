var http = require("http");

var manejador = (req, res) => {

    console.log("Hola mundo :)");
    res.end("Puto");
}

var servidor = http.createServer(manejador);
servidor.listen(8080);