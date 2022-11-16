const productModel = require('../../database/models/products');

module.exports = async function (page) {
	const products = await productModel
		.find({})
		.skip(page * 6)
		.limit(6);

	return products;
};
