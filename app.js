// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + '/date.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

title = ["Generic", "Work"];
genericItems = ["Excercise", "Take a bath", "Read"];
workItems = [];


app.get("/", (req, res) => {
  res.render("list", {
    dayOfWeek: date.getDay,
    listTitle: title[0],
    newItems: genericItems,
  });
});

app.post("/", (req, res) => {
  var newItem = req.body.newTodo;
  if (newItem != "") {
    if (req.body.typeOfList === "Generic") {
      genericItems.push(newItem);
      res.redirect("/");
    } else {
      workItems.push(newItem);
      res.redirect("/work");
    }
  }
});

app.get("/work", function (req, res) {
  res.render("list", {
    dayOfWeek: date.getDay,
    listTitle: title[1],
    newItems: workItems,
  });
});

app.get("/about",function(req,res){
  res.render("about");
})


app.listen(process.env.PORT || 3000, () => {
  console.log("~~~ Server STARTED ~~~");
});
