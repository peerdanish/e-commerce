const getMoreProducts = require('../../services/products/getMoreProducts.service');

module.exports = async function (req, res) {
	let page = req.query.p;
	try {
		const data = await getMoreProducts(page);
		res.json(data);
	} catch (err) {
		console.log('Error in getting more products', err);
	}
};
