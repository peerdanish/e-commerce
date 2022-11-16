const productModel = require('../../database/models/products');

module.exports = async function (req, res) {
	let id = req.params.id;
	try {
		await productModel.deleteOne({ _id: id });
	} catch (err) {
		console.log('ERROR : ', err);
	}

	return;
};
