let express = require('express');
let app = express();
let path = require('path');

let buildPath = path.resolve('./public/build');

app.use(express.static(buildPath));

let mainRouter = require('./routes/mainRouter');

app.use('/', mainRouter);

let port = process.env.PORT || 3001;
app.listen(port, () => console.log('Server running: 3001'));