const express = require("express");
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controllers/products.controller");
const router = express.Router();
router.get("/getProducts", getProducts);
router.get("/product/:id", getProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.post("/products", createProduct);

module.exports = router;
