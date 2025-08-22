const productService = require("../services/product.service");

exports.getProducts = async (req, res) => {
  const products = await productService.getAll();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const product = await productService.getById(req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
};

exports.createProduct = async (req, res) => {
  const product = await productService.create(req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await productService.update(req.params.id, req.body);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await productService.delete(req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted successfully" });
};
