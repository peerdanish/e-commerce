//original one
const express = require('express');
const fs = require('fs');
const app = express();
const multer = require('multer');
const upload = multer(
	{ dest: 'uploads' },
	{
		filename: (req, file, cb) => {
			console.log('File name is ', file);
			cb(null, Date.now(), path.extname(file.originalname));
		},
	}
);

const cors = require('cors');
const session = require('express-session');
const startDb = require('./database/init');
const userModel = require('./database/models/user');

const getAllProductsController = require('./controllers/products/getAllProducts.controller');
const getMoreProductsController = require('./controllers/products/getMoreProducts.controller');
const createUserService = require('./services/user/createUser.service');
const verifyUserService = require('./services/user/verifyUser.service');
const updatePasswordService = require('./services/user/updatePassword.service');
const passwordResetService = require('./services/user/passwordReset.service');
const addToCartController = require('./controllers/cart/addToCart.controller');
const getOneProductController = require('./controllers/products/getOneProduct.controller');
const delFromCartController = require('./controllers/cart/delFromCart.controller');
const getCartController = require('./controllers/cart/getCart.controller');
const viewDescCartController = require('./controllers/cart/getProductDesc.controller');
const addProductsToDbController = require('./controllers/products/addProduct.controller');
const adminViewController = require('./controllers/products/adminView.controller.js');
const deleteProductConroller = require('./controllers/products/deleteProduct.controller');
const ProductController = require('./controllers/products/updateProduct.controller');

startDb();

let currentUser = 0;
let userId;
let userRole;
app.use(cors());

app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
		isLoggedIn: false,
		username: '',
	})
);

app.set('view engine', 'ejs');

app.route('/').get(getAllProductsController);

app.route('/desc/:id').get(viewDescCartController);

//validate email and set isVerfied value to true
app.route('/validateEmail/:userId').get(verifyUser);

// app.route('/getStock/:id').get(getOneProductController);

app.route('/deleteFromCart/:id').post(delFromCartController);

//admin options
app.route('/adminAddProducts').get(function (req, res) {
	// console.log('ROle in addAdmin : ', req.session.role);
	// console.log('User id logged in : ', req.session.currentUser);
	if (req.session.isLoggedIn && req.session.role == 'admin') {
		res.render('addproduct', {
			message: 'Logout',
			username: req.session.username,
		});
		return;
	}
	res.render('login', { error: 'Admin login' });
});
app.route('/adminViewProducts').get(adminViewController);

app
	.route('/deleteProduct/:id')
	.post(deleteProductConroller)
	.get(adminViewController);

app
	.route('/updateProduct/:id')
	.post(updateProductController)
	.get(adminViewController);

app.post('/addProductsToDb', upload.single('image'), addProductsToDbController);

//change password page
app.route('/changePassword').get(function (req, res) {
	if (req.session.isLoggedIn) {
		res.render('update', {
			userId: currentUser,
			message: '',
			username: req.session.username,
		});
		return;
	}
	res.redirect('/login');
});

//After user clicks change password in that page
app
	.route('/changePasswordBtn/:userId')
	.get(function (req, res) {
		if (req.session.isLoggedIn) {
			res.render('update', {
				userId: currentUser,
				message: 'Password updated',
				username: req.session.username,
			});
			return;
		}
		res.redirect('/');
	})
	.post(updatePassword);

//send a page when user clicks on change password
app.route('/forgotPassword').get(function (req, res) {
	res.render('forgotPassword', { message: '' });
});
//when user clicks on reset password in forgot password page
app.route('/forgotPassEmail').post(resetPasswordLink);

//handle click from email to send user to reset his password
app.route('/forgotPassLink/:userId').get(function (req, res) {
	res.render('update', {
		userId: req.params.userId,
		message: '',
		username: req.session.username,
	});
	return;
});

//add to cart page
app.route('/addToCart/:id').post(addToCartController);
//view cart page
app.route('/cart').get(getCartController);
app.route('/product').get(getMoreProductsController);

app.get('/logout', logoutUser);

app
	.route('/login')
	.get(function (req, res) {
		if (req.session.isLoggedIn) {
			console.log('Main 105 : ', req.session.isLoggedIn);
			res.redirect('/');
			return;
		}
		res.render('login', { error: 'Login' });
	})
	.post(function (req, res) {
		getUser(req.body.email, req.body.password, function (err, user) {
			if (user != undefined) {
				currentUser = user[0]._id.toString();
				userRole = user[0].role;
			}
			if (user) {
				req.session.isLoggedIn = true;
				req.session.role = userRole;
				req.session.currentUser = currentUser;
				req.session.username = user[0].username;
				if (!user[0].isVerified) {
					res.render('login', { error: 'please validate your account' });
					return;
				}
				res.redirect('/');
			} else {
				res.render('login', {
					error: 'Invalid credentials ! Please Enter Correct details',
				});
			}
		});
	});

app
	.route('/signup')
	.get(function (req, res) {
		res.render('signup', { error: 'Sign up' });
	})
	.post(function (req, res) {
		console.log('Here in signup post : ', req.body);
		checkUser(req.body.username, req.body.email, async function (err, data) {
			if (data.length == 0) {
				let role = req.body.role == 0 ? 'user' : 'admin';
				const user = {
					username: req.body.username,
					email: req.body.email,
					password: req.body.password,
					role,
				};
				console.log(role);
				try {
					await createUserService(user);
					res.render('login', { error: 'Check email for validation' });
				} catch (err) {
					console.log(err);
				}
			} else {
				res.render('signup', { error: 'User already exists' });
				console.log('Error in signup', err);
			}
		});
	});

//server start
app.listen(3000, function () {
	console.log('server is running ');
});

function Home(req, res) {
	if (req.session.isLoggedIn) {
		// todoModel.find({}, function (err, todos) {
		// 	res.render('index', { username: req.session.username, data: todos });
		// });
	} else {
		res.redirect('/login');
	}
}

function saveUser(user, callback) {
	userModel
		.create(user)
		.then(function () {
			callback(null);
		})
		.catch(function () {
			callback("Can't save user details");
		});
}

function getUser(email, password, callback) {
	userModel
		.find({ email: email, password: password })
		.then(function (data) {
			callback(null, data);
		})
		.catch(function (err) {
			callback('Incorrect details');
		});
}

function checkUser(username, email, callback) {
	userModel
		.find({ username: username, email: email })
		.then(function (data) {
			callback(null, data);
		})
		.catch(function (err) {
			callback('user not found', err);
		});
}

function logoutUser(req, res) {
	req.session.destroy();
	res.redirect('/login');
}

async function verifyUser(req, res) {
	const userId = req.params.userId;
	try {
		await verifyUserService(userId);
		res.redirect('/login');
	} catch (err) {
		res.json(err);
	}
}

async function updatePassword(req, res) {
	const userId = req.params.userId;
	const userPasswords = {
		newPassword: req.body.newPassword,
		confirmPassword: req.body.confirmPassword,
	};
	if (
		userPasswords.newPassword.length <= 0 &&
		userPasswords.confirmPassword.length <= 0
	) {
		res.render('update', {
			userId: userId,
			message: 'Please enter valid passwords',
			username: req.session.username,
		});
		return;
	}
	if (userPasswords.newPassword !== userPasswords.confirmPassword) {
		res.render('update', {
			userId: userId,
			message: "Passwords don't match",
			username: req.session.username,
		});
		return;
	}
	const user = await userModel.findOne({ _id: userId });
	if (user) {
		await userModel.updateOne(
			{ _id: userId },
			{ password: userPasswords.newPassword }
		);
		updatePasswordService(user);
		res.redirect('/');
	}
}

async function resetPasswordLink(req, res) {
	const email = req.body.email;
	const user = await userModel.findOne({ email: email });
	if (user) {
		passwordResetService(user);
		res.render('forgotPassword', { message: 'Email reset link sent' });
		return;
	} else {
		res.render('forgotPassword', { message: 'Invalid email' });
	}
}
