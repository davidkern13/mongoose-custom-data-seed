# mongoose-custom-data-seed

Nodejs create custon seeders for mongoose schemas

##your_seed_file.js

----------------------------------------------------------------------------------------------

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

Seed {createSeeder} - Post data into schema
```
seed(data, ProductsSchema, 'createSeeder').then(function(result) {
    console.log('createSeeder', result);
});
```
Seed {dropDatabase} - Delete all data from schema
```
seed(null, ProductsSchema, 'dropDatabase').then(function(result) {
    console.log('dropDatabase', result);
});
```

Types
```
data - array of objects
ProductsSchema - mongoose schema
createSeeder/dropDatabase - string
```

##Seed - index.js

----------------------------------------------------------------------------------------------

/**
 * seed function to manage case by options type.
 * @function seed
 * @param {data} postData - Array of objects to post into schema
 * @param {schema} schema - Schema of mongoose db
 * @param {options} postData - Type of case call
 * @returns {Promise}
 */
```
const seed = (data = {}, schema, options = '') => {
    switch (options) {
        case 'createSeeder':
            return createSeeder(data, schema);
            break;
        case 'dropDatabase':
            return dropDatabase(schema);
            break;
        default:
            return new Promise((reject) => {reject('options data object incorrect or not selected options')});
            break;
    }
};
```

/**
 * createSeeder function - post all data in to schema
 * @function createSeeder
 * @param {data} postData - Array of objects to post into schema
 * @param {schema} schema - Schema of mongoose db
 * @returns {Promise}
 */
 
 ```
 const createSeeder = (data, schema) => {

    return new Promise(async (resolve, reject) => {
        try {
            const saveData = await schema.insertMany(data);
            resolve(saveData);
        } catch (e) {
            reject('schema reject -> ' + e)
        }
    });
}
 ```
 
 /**
 * dropDatabase function - remove all data from schema
 * @function dropDatabase
 * @param {schema} schema - Schema of mongoose db
 * @returns {Promise}
 */
 ```
const dropDatabase = (schema) => {

    return new Promise(async (resolve, reject) => {
        try {
            const tableData = await schema.remove({});
            resolve(tableData);
        } catch (e) {
            reject('drop table reject -> ' + e)
        }
    });
}
```

export 
```
module.exports = {
    seed
}
```
