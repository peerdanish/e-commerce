const productModel = require('../../database/models/products');

module.exports = async function (page) {
	const products = await productModel.find({}).limit(6);
	const count = await productModel.count({});
	// console.log('Count : ', count);
	return products;
};
