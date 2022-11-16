const productModel = require('../../database/models/products');

module.exports = async function (req, res) {
	let id = req.params.id;
	console.log('Id of the product line 5 : ', id);
	let product = await productModel.find({ _id: id });

	return product;
};
