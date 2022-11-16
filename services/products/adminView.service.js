const productModel = require('../../database/models/products');

module.exports = async function (currentUser) {
	let products = await productModel.find({ createdBy: currentUser });
	return products;
};
