const productModel = require('../../database/models/products');

//TODO fix the undefined issue
module.exports = async function (req, res) {
	let id = req.params.id;
	console.log(req.session.username);
	// console.log('ID : ', typeof id);
	let product = await productModel.find({ _id: id });
	console.log('Product in product description : ', product);
	res.render('descriptionCart', {
		username: req.session.username,
		message: 'Logout',
		product,
	});
	return;
};
