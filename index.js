var express = require("express");
var app = express();
// var things = require("./things.js");
// var cartRouter = require("./cart.js");
// var productRouter = require("./product.js");

// app.use("/things",things);
// app.use("/products",productRouter);
// app.use("/cart",cartRouter);

app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/first_template", function (req, res) {
  res.render("first_view", {
    name: { title: "Hello", age: 32 },
    url: "http://www.tutorialspoint.com",
  });
});

app.listen(3000);
