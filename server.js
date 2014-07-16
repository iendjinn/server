var express = require("express");
var app = express();
var util = require("util");
var fs = require("fs");

/* Setting up markdown parsing */
var marked = require("marked");
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

/* Serving home page */

app.get("/", function(req, res) {
	res.sendfile('index.html');
});

app.post("/user/add", function(req, res) { 
	/* some server side logic */
	res.send("OK");
});

/* serves all the md files */
app.get('*.md', function(req, res) {
	console.log('Routing an md file request');

	fs.readFile(__dirname + req.params[0]+".md", "utf8", function(err,data) {
		console.log(__dirname + req.params[0]+".md");
		if(err) throw err; 
		console.log(data);
		marked(data, function(err, content) 
			{if(err) throw err; console.log(content);res.send(content);});
	});				
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
	console.log('static file request : ' + util.inspect(req.params, false, null));
	res.sendfile( __dirname + req.params[0]); 
});



var port = process.env.PORT || 5000;
	app.listen(port, function() {
	console.log("Listening on " + port);
});