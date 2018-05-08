const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

const port = parseInt(process.env.PORT || 3000);

const games = require("./routes/games");

app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use("/games", games);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
