const productRepositorie = require("../repositories/product-repositoire");

async function getAll(req, res) {
  try {
    const products = await productRepositorie.getProduct();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getById(req, res) {
  try {
    const product = await productRepositorie.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createProduct(req, res) {
  try {
    const product = await productRepositorie.addProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateProduct(req, res) {
  try {
    const product = await productRepositorie.updateProduct(
      req.params.id,
      req.body
    );
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await productRepositorie.deleteProduct(req.params.id);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};
