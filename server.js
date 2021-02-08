var http = require('http');
const express = require('express');


const app = express();

app.set('port', process.env.PORT || 3000);
 
const server = app.listen(app.get('port'), function() {
    console.log('listening on port ', server.address().port);
  });



const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('/',(req,res) => res.sendfile('index.html',{root:baseDir}))



// const path = require('path');
// const express = require('express');
 
// const app = express();
 
// app.use(express.static(path.join(__dirname, 'build')));
// app.set('port', process.env.PORT || 3000);
 
// const server = app.listen(app.get('port'), function() {
//   console.log('listening on port ', server.address().port);
// });