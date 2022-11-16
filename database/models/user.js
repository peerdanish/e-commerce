const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
	username: String,
	email: String,
	password: String,
	isVerified: {
		type: Boolean,
		default: false,
	},
	role: String,
	cart: [
		{
			_id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'product',
			},
			name: String,
			description: String,
			image: String,
			stock: Number,
		},
	],
});

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
