let loadBtn = document.getElementById('loadMore');
let productsDiv = document.getElementById('products');
loadBtn.addEventListener('click', loadMore);

function loadMore(e) {
	let request = new XMLHttpRequest();
	let p = parseInt(loadBtn.classList[0]);
	// console.log('Value of p = ', p);
	loadBtn.setAttribute('class', p + 1);
	request.open('GET', `/product?p=${p}`);

	request.send();
	// console.log('Limit in script ', p * 6);
	request.addEventListener('load', function () {
		// console.log(JSON.parse(request.responseText));
		let response = JSON.parse(request.responseText);
		response.forEach((item) => {
			// console.log(item);
			let element = document.createElement('div');
			element.setAttribute('class', 'product-outer');
			element.setAttribute('id', item._id);

			element.innerHTML = `
			<div class="product" >
            <img src="${item.image}" alt="product image" class="product-image" />
            <div class="product-details">
                <h3 class="product-head">${item.name}</h3>
                <div class="button-desc">
								<p class="product-description none">${item.description}</p>
                <button id="viewDetails" class="viewDetails" onclick="showDesc(this)">
                    View details
                </button>
								</div>
            </div>
 			</div>
			 <div id="main-page-product-bottom">
			 <button
				 id="${item._id}" onclick="addToCart(this)" class="cart addCartBtn" >Add to cart</button>
			 <p>&#8377 ${item.price}</p>
		 </div>
			 `;
			productsDiv.appendChild(element);
		});
	});
}
{
	/* <a  href="/addToCart/${item._id}" class="cart addCartBtn">Add to cart</a> */
}
function showDesc(e) {
	let status = e.previousElementSibling.classList.toggle('none');

	if (status) {
		e.innerText = 'View details';
	} else {
		e.innerText = 'Show less';
	}
}

function cartMinus(e) {
	let element = e.parentElement.previousElementSibling.childNodes[3];
	if (element.innerText > 1) {
		element.innerText--;
	}
}

function cartPlus(e) {
	let element = e.parentElement.previousElementSibling.childNodes[3];
	let id = e.parentElement.id;

	if (element.innerText < 10) {
		element.innerText++;
		// let request = new XMLHttpRequest();
		// request.open('GET', `/getStock/${id}`);
		// request.send();
		// request.addEventListener('load', function () {
		// 	let response = JSON.parse(request.responseText);
		// 	let stock = response[0].stock;
		// 	if (element.innerText > stock) {
		// 		console.log('Out of stock');
		// 	}
		// });
	}
}

function deleteFromCart(e) {
	let id = e.parentElement.id;
	let product = e.parentElement.parentElement;
	product.remove();
	console.log('Product element : ', product);
	let request = new XMLHttpRequest();
	request.open('POST', `/deleteFromCart/${id}`);
	request.send();
	// request.addEventListener('load', function () {});

	console.log('Delete kar doon');
}

function addToCart(e) {
	let id = e.id;
	console.log('Id in home : ', id);
	let request = new XMLHttpRequest();
	request.open('POST', `/addToCart/${id}`);
	// request.setRequestHeader();
	request.send();

	request.addEventListener('load', function () {
		let value = request.responseText.split('"')[1];
		window.location.replace('/login');
	});
}

function deleteProduct(e) {
	console.log('Delete product', e);
	let id = e.parentElement.id;
	console.log(id);
	let product = e.parentElement.parentElement.parentElement.parentElement;
	product.remove();
	console.log('Product element : ', product);
	let request = new XMLHttpRequest();
	request.open('POST', `/deleteProduct/${id}`);
	request.send();
}

function getProductData(e) {
	console.log(e.parentElement.parentElement.id);
	let formId = e.parentElement.parentElement.id;
	const form = document.getElementById(formId);
	let formData = new FormData(form);
	let body = {
		name: 'hello',
		description: 'hello',
		price: 2,
		stock: 1,
	};
	for (const [key, value] of formData) {
		body[`${key}`] = `${value}`;
	}
	let request = new XMLHttpRequest();
	request.open('POST', `/updateProduct/${formId}`);
	request.setRequestHeader('Content-Type', 'application/json');
	request.send(JSON.stringify(body));
}
