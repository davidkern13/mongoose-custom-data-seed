const ProductsSchema = require('../models/productShema/products');
const { seed} = require('./index.js');

const data = [
   {
        title: "Jordan 1 Retro High 85 Varsity Red",
        price: 679,
        currency: "USD",
        stock: 30,
    },
   {
        title: "Jordan 1 Retro High Yellow Ochre",
        price: 357,
        currency: "USD",
        stock: 15,
    },
    {
        title: "Jordan 1 Retro High Black Gym Red",
        price: 90,
        currency: "USD",
        stock: 107,
    },
];

/*
* Seed {createSeeder} - Post data into schema
*/
seed(data, ProductsSchema, 'createSeeder').then(function(result) {
    console.log('createSeeder', result);
});

/*
* Seed {dropDatabase} - Delete all data from schema
*/
seed(null, ProductsSchema, 'dropDatabase').then(function(result) {
    console.log('dropDatabase', result);
});

