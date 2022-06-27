var products = require("./server/products/index.get.json");
var categories = require("./server/categories/index.get.json");
var banners = require("./server/banners/index.get.json");

module.exports = function () {
  return {
    products: products,
    categories: categories,
    banners: banners,
  };
};
