const express = require("express");
const app = express();
const {
    globalErrHandler,
    notFoundErr,
} = require("../middlware/globalErrHandler");
const multipart = require('../middlware/multer.middlware');
const { urlEncoded, jsonEncoded } = require('../middlware/bodyParser.middlware');
const cors = require('../middlware/cors.middlware');
const path = require("path");

// here all routes file
const userRoutes = require("../routes/user.routes");
const taskRoutes = require("../routes/task.routes");

// predefined middlware
app.use(cors());
app.use(urlEncoded);
app.use(jsonEncoded);
app.use(multipart);
// server.use('/images',express.static(path.join(__dirname, 'public/images')));
app.use('/storage/images',express.static(path.join(__dirname, 'storage/images')));

// routes middlware
app.use("/api/user/",userRoutes);
app.use("/api/task",taskRoutes);


app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;