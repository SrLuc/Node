let products = [
  {
    id: 1,
    name: "Iphone 12",
  },
  {
    id: 2,
    name: "Iphone 12 Pro",
  },
  {
    id: 3,
    name: "Iphone 12 Pro Max",
  },
];

const getProduct = () => {
  return products;
};

const getProductById = (id) => {
  return products[id - 1];
};

const addProduct = (product) => {
  return products.push(product);
};

const updateProduct = (id, product) => {
  return (products[id - 1] = product);
}; 

const deleteProduct = (id) => {
  return products.splice(id - 1, 1);
};

module.exports = {
  getProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
