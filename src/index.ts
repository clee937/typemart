import products from "./products";

const productName: string = "beanie";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "123 Maple Avenue, New York City, New York";

// find the matching item from the inventory
const product = products.find((item) => item.name === productName);

/* Alternative - returns an array so we use [0] to select the first result.
const product = products.filter((item) => item.name === productName)[0]; */

console.log(`Found product ${JSON.stringify(product)}`);

if (!product) {
  throw new Error("Product not found");
}

const preOrder = product.preOrder.toLowerCase() === "true";

// check if item is on preOrder and notify user if so.
if (preOrder) {
  console.log("We'll notify you once the item has been despatched");
}

// Check if the product qualifies for free shipping
if (parseFloat(product.price) > 25) {
  shipping = 0;
  console.log("This item includes free shipping.");
} else {
  shipping = 5;
}

// Check the amount of tax to pay
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = parseFloat(product.price) * taxPercent;

total = parseFloat(product.price) + taxTotal + shipping;

console.log(`RECEIPT: 
Product: ${product.name} 
Address: ${shippingAddress},
Price: $${parseFloat(product.price).toFixed(2)}
Tax: $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total: $${total.toFixed(2)}
`);
