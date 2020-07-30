const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/index");
const FakeDB = require("./fake-db");
const productRoutes = require("./routes/product-routing");
const UserRoutes = require("./routes/users");
const path = require("path");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {

    if (process.env.NODE_ENV !== 'production') {
      const fakeDB = new FakeDB();
      // fakeDB.initDB();
     }
      });

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", UserRoutes);

if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, "..", "dist", "udemy-angular");
  app.use(express.static(appPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(appPath, "index.html"));
  })
};

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log("Express Running");
});
