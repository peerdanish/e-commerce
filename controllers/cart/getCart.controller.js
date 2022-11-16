const userModel = require('../../database/models/user');

module.exports = async function (req, res) {
	// console.log(req.session.currentUser);
	if (!req.session.isLoggedIn) {
		res.redirect('/login');
		return;
	}
	const cartData = await userModel.find({ _id: req.session.currentUser });

	let userCart = JSON.parse(JSON.stringify(cartData[0].cart));
	
	// console.log('Inside view cart', userCart);
	let data = [];
	userCart.forEach((item) => {
		data.push(item);
	});

	// console.log('Cart : ', cart);
	console.log('Data in cart : ', data);
	res.render('cart', {
		username: req.session.username,
		message: 'Logout',
		product: data,
		cartMessage: 'Back to Product Page',
	});
	// return cart;
	return;
};
