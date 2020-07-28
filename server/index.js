const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const FakeDB = require("./fake-db");
const productRoutes = require("./routes/product-routing");

const app = express();

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  const fakeDB = new FakeDB();
  fakeDB.initDB();
});

app.use("/api/v1/products", productRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log("Express Running");
});

// mongodb+srv://test:<password>@cluster0.aqucl.mongodb.net/<dbname>?retryWrites=true&w=majority
