/*  Create a mini online store using JavaScript (Arrays & Objects)

Have a list of products (array of objects).
Let the user add items to cart.
Show the total price.
Let the user remove an item.
This is a great way to apply everything you’ve learned! 💡 */

/* let products = [
    {
        name: 'iPhone',
        price: 799,
        category: 'Electronics'
    },
    {
        name: 'Sony Headphones',
        price: 99,
        category: 'Electronics'
    },
    {
        name: 'Samsung Galaxy',
        price: 699,
        category: 'Electronics'
    }
];
let cart = []; //cart will store selected products

function addToCart(productName) {
    let product = products.find(products => products.name === productName);
    if (product) {
        cart.push(product);
        console.log(`${productName} added to cart`);
    } else {
        console.log('Product not found');
    }
} addToCart('iPhone');
addToCart('Sony Headphones');
console.log(cart);

function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`the total price ${total}`)
} calculateTotal(); */

let products = [
    {
        id: 1,
        name: 'iPhone',
        price: 799,
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Sony',
        price: 209,
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Samsung',
        price: 799,
        category: 'Electronics'
    }

];
let cart = [];

function addToCart(productId) {
    let product = products.find(products => products.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} added to cart`);
    } else {
        console.log('Product not found');
    }
} addToCart(1);
addToCart(2);
console.log(cart);

function totalPrice() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`The total price is ${total}`);

} totalPrice();

function removeFromCart(productId) {//find the item from cart and remove it
    let index = cart.findIndex(item => item.id === productId);//find the index of the item in cart
    if (index !== -1) {//if item is found
        let removedItem = cart.splice(index, 1); //remove the item from cart
        console.log(`${removedItem[0].name} removed from cart `);
    } else {
        console.log('Product not found');
    }
} removeFromCart(1);
console.log(cart);
totalPrice();