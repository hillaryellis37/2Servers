var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;


var server1 = http.createServer(function(req, res){
	console.log("You rock it like no one's business!")
});

var server2 = http.createServer(function(req, res){
	console.log("You're a silly goose, you silly goose!")

});

server1.listen(PORT1, function(error){
 if (error) throw error;
 console.log("listening on Port 7000");
});

server2.listen(PORT2, function(error){
 if (error) throw error;
 console.log("listening on Port 7500");
});