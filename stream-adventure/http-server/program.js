var http = require('http'),
    through = require('through');

var server = http.createServer(function(req, res){
  if (req.method == 'POST') {
    req.pipe(through(write)).pipe(res);
  }

  function write(buf){
    this.queue(buf.toString().toUpperCase());
  }

})

server.listen(process.argv[2]);
