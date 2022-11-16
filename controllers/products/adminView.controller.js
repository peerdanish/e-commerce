const adminViewService = require('../../services/products/adminView.service.js');

module.exports = async function (req, res) {
	if (req.session.isLoggedIn && req.session.role == 'admin') {
		let products = await adminViewService(req.session.currentUser);
		res.render('adminview', {
			message: 'Logout',
			username: req.session.username,
			products,
		});
		return;
	}
	res.render('login', { error: 'Admin login' });
};
