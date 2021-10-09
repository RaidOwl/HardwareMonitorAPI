var express = require("express");
var func = require('./api');
var app = express();
var port = 3000;

app.listen(port, () => {
 console.log("Server running on port " + port);
});

app.get('/system/:obj/:param', function (req, res) {
    func.getItem(req.params.obj,req.params.param)
    .then(data => {
        res.send(data);
    });
    
  })

app.get('/system/:obj', function (req, res) {
    func.getItemSimple(req.params.obj)
    .then(data => {
        if (req.params.obj == "networkStats") {
            res.send(data.networkStats[0]);
            //res.send(data);
        } else {
            res.send(data);
        }
        
    });
    
  })