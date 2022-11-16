const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
	name: String,
	description: String,
	image: String,
	stock: Number,
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'product',
	},
});

const cartModel = new mongoose.model('cart', cartSchema);

module.exports = cartModel;
