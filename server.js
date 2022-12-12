var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var swtoolRouter = require("./routes/SwtoolRout");
var fileuploadRouter = require("./routes/UploadRout");

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/Swtool", swtoolRouter);
app.use("/api/upload", fileuploadRouter);
app.use(express.static("./uploads"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));