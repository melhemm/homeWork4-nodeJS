const express = require("express");
const multer  = require("multer");
const app = express();
 
const upload = multer({dest:"uploads"});
app.use(express.static(__dirname));
 
app.post("/upload", upload.single("filedata"), function (req, res, next) {
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send(`Not Upload Ereor`);
    else {
        res.send(`You have uploaded this image: <br>
        <img src="${req.file.path}" width="350"><br>
        <a href="./">Upload another image</a>`);
    }
});
app.listen(8080);

