const express = require("express");
const mongoose = require("mongoose");
const product = require("./routes/products.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", product);
// app.listen(3000, () => {
//   console.log("port: 3000");
// });
app.get("/", (req, res) => {
  res.send("Hiii");
});
app.post("/test", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});
mongoose
  .connect(
    "mongodb+srv://gnanasai:sWDR1Lblmpp7QXfM@mydb.stnbpa2.mongodb.net/?retryWrites=true&w=majority&appName=mydb",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to Database");
    app.listen(3050, () => {
      console.log("server is running on port 3050");
    });
  })
  .catch((error) => {
    console.log(error);
  });
