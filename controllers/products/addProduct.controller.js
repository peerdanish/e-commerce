const addProductService = require('../../services/products/addProduct.service');

module.exports = async function (req, res) {
	let data = req.body;
	let image = req.file != undefined ? req.file.filename : '';
	let size = req.file ? req.file.size : '';
	// createdBy: req.session.currentUser
	console.log('Current user in addproduct : ', req.session.currentUser);
	//validation check if data fields are not empty
	if (data.name && data.description && data.price && data.quantity) {
		//check if image field is not empty
		if (!image) {
			res.render('addproduct', {
				username: req.session.username,
				message: 'Logout',
				alert: '',
				imageAlert: 'Image is required',
			});
			return;
		}

		//check if image size is larger than 250kb
		if (size > 256000) {
			res.render('addproduct', {
				username: req.session.username,
				message: 'Logout',
				alert: '',
				imageAlert: 'Image size exceeds 250kb',
			});
			return;
		}

		//product to insert into db
		let product = {
			name: data.name,
			description: data.description,
			image: image,
			stock: parseInt(data.quantity),
			price: parseInt(data.price),
			createdBy: req.session.currentUser,
		};
		//calling service method to insert product
		await addProductService(product);
		res.render('addproduct', {
			username: req.session.username,
			message: 'Logout',
			alert: 'Item added',
		});
	} else {
		//this will run when fields are empty
		res.render('addproduct', {
			username: req.session.username,
			message: 'Logout',
			alert: 'Fill all fields',
		});
	}
};
