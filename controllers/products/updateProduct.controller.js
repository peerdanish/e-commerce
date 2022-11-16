const updateProductService = require('../../services/products/updateProduct.service');
module.exports = async function (req, res) {
	console.log('Im here in update product');
	console.log(req.params.id);
	console.log(req.body);
	let updatedData = {
		name: req.body.name,
		description: req.body.description,
		price: parseInt(req.body.price),
		stock: parseInt(req.body.stock),
	};
	updateProductService(req.params.id, updatedData);
	res.redirect('/adminViewProducts');
};
