const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("", (req, res) => {
  Product.find({}, (err, foundProducts) => {
    res.json( foundProducts );
  });
});

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId, (err, foundProduct) => {
    if (err) {
      return res.status(422).send({errors: [{title: "Product error", detail: "Product not Found..."}]})
    }
    return res.json( foundProduct );
  });
});

module.exports = router;
