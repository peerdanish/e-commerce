const productModel = require('../../database/models/products');

module.exports = async function (product) {
	let products = await productModel.create(product);
	console.log('Products in addproduct file : ', products);
	return products;
};
