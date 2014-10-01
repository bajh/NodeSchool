var split = require('split'),
   through = require('through'),
   line_counter = 0;
process.stdin
  .pipe(split())
  .pipe(through(function(line){
    line_counter++;
    if (line_counter % 2 == 0){
      this.queue(line.toString().toUpperCase() + '\n');
    } else {
      this.queue(line.toString().toLowerCase() + '\n');
    };
  }))
  .pipe(process.stdout)
