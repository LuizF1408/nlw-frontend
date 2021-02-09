var path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
 app.listen(port, () => {
    console.log('Server is up!');
 });

// const path = require('path');
// const express = require('express');
 
// const app = express();
 
// app.use(express.static(path.join(__dirname, 'build')));
// app.set('port', process.env.PORT || 3000);
 
// const server = app.listen(app.get('port'), function() {
//   console.log('listening on port ', server.address().port);
// });