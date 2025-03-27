import products from "./products";

const productName: string = "tote bag";

// find the matching item from the inventory
const product = products.find((item) => item.name === productName);
