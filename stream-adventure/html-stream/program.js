var trumpet = require('trumpet')(),
    fs = require('fs'),
    through = require('through');

process.stdin.pipe(trumpet).pipe(process.stdout);

var loud = trumpet.select('.loud').createStream();
var tr = through(write);
function write(buf) {
  this.queue(buf.toString().toUpperCase());
}
loud.pipe(tr).pipe(loud)
