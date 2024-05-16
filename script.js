//maine isme ek task bnaiya and task ko display pr save kariya hu this is first step where i have to learn more and more about all function like edit delete and update 



const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        res.render("index", { files: files });
    })
})

app.post('/create', function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {

        res.redirect("/")
    });
})


app.listen(3000);




