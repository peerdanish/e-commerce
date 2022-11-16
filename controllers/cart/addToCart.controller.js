const productModel = require('../../database/models/products');
const cartModel = require('../../database/models/cart');
const userModel = require('../../database/models/user');

module.exports = async function (req, res) {
	if (!req.session.isLoggedIn) {
		res.json('login');
		return;
	}
	let id = req.params.id;
	let user = req.session.currentUser;
	//get product from db
	let insideCartObj = await userModel.find({ _id: user });

	let userCart = JSON.parse(JSON.stringify(insideCartObj[0].cart));
	let flag = 0;
	userCart.forEach((item) => {
		if (item._id.toString() == id) {
			flag = 1;
		}
	});

	let product = await productModel.find({ _id: id });
	let cartProduct = {
		_id: product[0]._id,
		name: product[0].name,
		description: product[0].description,
		image: product[0].image,
		stock: product[0].stock,
	};
	if (!flag == 1) {
		// console.log('Inside cart product prep : ', cartProduct);
		await userModel.find({ _id: user }).updateOne({
			$push: { cart: cartProduct },
		});
	} else {
		console.log('Exists already');
		// await userModel.find({ _id: user }).updateOne({
		// 	$push: { cart: cartProduct },
		// });
	}
};
