const {join} = require('path');
const express = require('express');
const routes = require('./routes');
const app = express();

const {PORT} = process.env;

app.use(require('express-ejs-layouts'));
app.set('view engine', 'ejs');
app.set('views', [join(__dirname, 'views')]);

app.use('/', routes);

app.listen(PORT, console.log(`Server started.... visit: http://localhost:${PORT}/`));
