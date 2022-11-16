const getAllProducts = require('../../services/products/getAllProducts.service');
module.exports = async function (req, res) {
	// if (!req.session.isLoggedIn) {
	// 	res.render('login');
	// 	return;
	// }

	try {
		const data = await getAllProducts();

		if (!req.session.isLoggedIn) {
			res.render('index', {
				products: data,
				username: req.session.username,
				message: 'Login',
			});
		} else {
			res.render('index', {
				products: data,
				username: req.session.username,
				message: 'Logout',
			});
		}
	} catch (err) {
		console.log('Error in getting all products', err);
	}
};
