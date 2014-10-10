var duplexer = require('duplexer'),
    through = require('through');

module.exports = function (counter) {

  var tr = through(write, end),
      count = {};

  function write(buf) {
    if (count[buf.country]) {
      count[buf.country]++;
    } else {
      count[buf.country] = 1;
    }
  }

  function end() {
    counter.setCounts(count);
  }

  return duplexer(tr, counter);

}
