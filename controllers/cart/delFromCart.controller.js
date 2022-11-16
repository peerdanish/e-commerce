const cartModel = require('../../database/models/cart');
const userModel = require('../../database/models/user');

module.exports = async function (req, res) {
	let id = req.params.id;
	// console.log();
	let userId = req.session.currentUser;
	try {
		await userModel
			.find({ _id: userId })
			.update({}, { $pull: { cart: { _id: id } } });
		// await cartModel.deleteOne({ _id: id });
		console.log('I ran');
	} catch (err) {
		console.log('ERROR : ', err);
	}

	return;
};
