var express = require("express");
var app = express();
var things = require("./things.js");
var productRouter = require("./cart.js");
var cartRouter = require("./cart.js");


app.use("/things",things);
app.use("/cart",cartRouter);
app.use("/products",productRouter);

app.listen(3000);
