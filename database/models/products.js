const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
	name: String,
	description: String,
	image: String,
	stock: Number,
	price: Number,
	createdBy: String,
});

const productModel = new mongoose.model('product', productSchema);

module.exports = productModel;
// let data = [
// 	{
// 		name: 'Iphone 6',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://img.tttcdn.com/product/xy/2000/2000/p/gu1/P/8/PF0008GY-US-128/PF0008GY-US-128-1-fa9d-CVm7.jpg?version=20180226',
// 		stock: 7,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 7',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://i5.walmartimages.com/asr/9d329b05-4527-494a-8717-e816a5f7e904_1.88c3944fe27fb48083e6bc33371437d4.jpeg',
// 		stock: 5,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 8',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.dE487RrnYVNX9n8iG0JFUQHaHa?pid=ImgDet&rs=1',
// 		stock: 4,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone X',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.0Ox9LCgxZevGjA_Fb3j5cQHaHa?pid=ImgDet&rs=1',
// 		stock: 9,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 11',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://i5.walmartimages.com/asr/925a89dc-800a-413f-9d7d-8256b38ba16a_1.9f1d3e095c256f4751eabcf8ade9ba99.jpeg',
// 		stock: 6,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Samsung S22',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.vT1_B7SHoqPnx8hPx7qxfwHaF4?pid=ImgDet&rs=1',
// 		stock: 22,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Pixel 6',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/05/Pixel-6-Pro.jpeg',
// 		stock: 12,
// 		price: 5000,
// 	},
// 	//TODO repeating from here
// 	{
// 		name: 'Iphone 6',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://img.tttcdn.com/product/xy/2000/2000/p/gu1/P/8/PF0008GY-US-128/PF0008GY-US-128-1-fa9d-CVm7.jpg?version=20180226',
// 		stock: 13,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 7',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://i5.walmartimages.com/asr/9d329b05-4527-494a-8717-e816a5f7e904_1.88c3944fe27fb48083e6bc33371437d4.jpeg',
// 		stock: 28,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 8',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.dE487RrnYVNX9n8iG0JFUQHaHa?pid=ImgDet&rs=1',
// 		stock: 2,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone X',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.0Ox9LCgxZevGjA_Fb3j5cQHaHa?pid=ImgDet&rs=1',
// 		stock: 11,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 11',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://i5.walmartimages.com/asr/925a89dc-800a-413f-9d7d-8256b38ba16a_1.9f1d3e095c256f4751eabcf8ade9ba99.jpeg',
// 		stock: 17,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Samsung S22',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.vT1_B7SHoqPnx8hPx7qxfwHaF4?pid=ImgDet&rs=1',
// 		stock: 8,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Pixel 6',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/05/Pixel-6-Pro.jpeg',
// 		stock: 9,
// 		price: 5000,
// 	},
// 	//TODO repeating again
// 	{
// 		name: 'Iphone 6',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://img.tttcdn.com/product/xy/2000/2000/p/gu1/P/8/PF0008GY-US-128/PF0008GY-US-128-1-fa9d-CVm7.jpg?version=20180226',
// 		stock: 7,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 7',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://i5.walmartimages.com/asr/9d329b05-4527-494a-8717-e816a5f7e904_1.88c3944fe27fb48083e6bc33371437d4.jpeg',
// 		stock: 5,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 8',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.dE487RrnYVNX9n8iG0JFUQHaHa?pid=ImgDet&rs=1',
// 		stock: 4,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone X',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.0Ox9LCgxZevGjA_Fb3j5cQHaHa?pid=ImgDet&rs=1',
// 		stock: 9,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 11',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://i5.walmartimages.com/asr/925a89dc-800a-413f-9d7d-8256b38ba16a_1.9f1d3e095c256f4751eabcf8ade9ba99.jpeg',
// 		stock: 6,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Samsung S22',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.vT1_B7SHoqPnx8hPx7qxfwHaF4?pid=ImgDet&rs=1',
// 		stock: 22,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Pixel 6',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/05/Pixel-6-Pro.jpeg',
// 		stock: 12,
// 		price: 5000,
// 	},
// 	//TODO repeating again
// 	{
// 		name: 'Iphone 6',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://img.tttcdn.com/product/xy/2000/2000/p/gu1/P/8/PF0008GY-US-128/PF0008GY-US-128-1-fa9d-CVm7.jpg?version=20180226',
// 		stock: 13,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 7',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://i5.walmartimages.com/asr/9d329b05-4527-494a-8717-e816a5f7e904_1.88c3944fe27fb48083e6bc33371437d4.jpeg',
// 		stock: 28,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 8',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.dE487RrnYVNX9n8iG0JFUQHaHa?pid=ImgDet&rs=1',
// 		stock: 2,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone X',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.0Ox9LCgxZevGjA_Fb3j5cQHaHa?pid=ImgDet&rs=1',
// 		stock: 11,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Iphone 11',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://i5.walmartimages.com/asr/925a89dc-800a-413f-9d7d-8256b38ba16a_1.9f1d3e095c256f4751eabcf8ade9ba99.jpeg',
// 		stock: 17,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Samsung S22',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://th.bing.com/th/id/OIP.vT1_B7SHoqPnx8hPx7qxfwHaF4?pid=ImgDet&rs=1',
// 		stock: 8,
// 		price: 5000,
// 	},
// 	{
// 		name: 'Pixel 6',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate. Faucibus purus in massa tempor nec. Massa sed elementum tempus egestas sed sed risus pretium quam.',
// 		image:
// 			'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/05/Pixel-6-Pro.jpeg',
// 		stock: 9,
// 		price: 5000,
// 	},
// ];
// productModel
// 	.insertMany(data)
// 	.then(function () {
// 		console.log('Data inserted'); // Success
// 	})
// 	.catch(function (error) {
// 		console.log(error); // Failure
// 	});
