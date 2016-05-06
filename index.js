var express = require('express'),
    port = 8081,
    app = express();


var people = [{name: 'Jake'}, {name: 'Tom'}];

app.use(express.static(__dirname));

app.get('/people', function(req, res){
    setTimeout(function(){
	    res.send(people);
    }, 3000)

})


app.listen(port, function(){
   console.log('Listening on port', port);
})
