//express
const express = require("express");
const app = express();
app.use(express.json());

//controller
const productController = require("./src/controllers/product-controller");

//routes
app.get("/product", productController.getAll);
app.get("/product/:id", productController.getById);
app.post("/product", productController.createProduct);
app.put("/product/:id", productController.updateProduct);
app.delete("/product/:id", productController.deleteProduct);

//server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
