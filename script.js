let products = [
    {
        id:1,
        name:"Laptop",
        price:20000,
        available: true
    },
    {
        id: 2,
        name: "Mouse",
        price: 500,
        available: true
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1000,
        available: false
    },
    {
        id: 4,
        name: "Phone",
        price: 15000,
        available: true
    },
    {
        id: 5,
        name: "Headphone",
        price: 800,
        available: false
    },
];
//use map()to create a new array that contains only the product names
let mapResult = products.map(product => product.name );
console.log(mapResult);

// use filter() to get all products with a price less than 2000
let filterResult = products.filter(product => product.price<2000);
console.log(filterResult);

//use find() to find the product with id=3
let findResult = products.find(product => product.id===3);
console.log(findResult);

//use forEach() to print each product in this formal : product:Laptop - price:2000
let forEachResult = products.forEach( product =>{
    console.log(`product: ${product.name} - price: ${product.price}`);
});

//use some() to check if there is at least one product with a price greater than 18000
let someResult = products.some(product => product.price > 18000);
console.log(someResult);

//use every to check if all products are available
let everyResult = products.every(product => product.available);
console.log(everyResult);

//use reduce() to calculatethe total price of all products 
let reduceResult = products.reduce((acc,product) =>{
    return acc+product.price
},0) ;
console.log(reduceResult);