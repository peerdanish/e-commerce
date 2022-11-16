const productModel = require('../../database/models/products');

module.exports = async function (id, data) {
	let updated = await productModel.findOneAndUpdate({ _id: id }, data);
	console.log('Updated in service : ', updated);
	return;
};
