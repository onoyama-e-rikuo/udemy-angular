const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/index");
const FakeDB = require("./fake-db");
const productRoutes = require("./routes/product-routing");
const path = require("path");

const app = express();

mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {

    if (process.env.NODE_ENV !== 'production') {
      const fakeDB = new FakeDB();
      // fakeDB.initDB();
     }
      });

app.use("/api/v1/products", productRoutes);

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
