# mongoose-custom-data-seed

Nodejs create custon seeders for mongoose schemas

import your schema

```
const ProductsSchema = require('../models/productShema/products');

```

import the seed function

```
const { seed} = require('./index.js');

```

create custom data to seed

```
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

```
