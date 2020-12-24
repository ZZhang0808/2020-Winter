const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const userRouter = require('./routes/user');

const port = process.env.PORT || 8000;

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(port, function() {
    console.log('Server started on port ' + port);
})
app.get('/', function(req, res) {
    res.send('Hello World');
});
module.exports = app;