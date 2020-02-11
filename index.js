/**
 * seed function to manage case by options type.
 * @function seed
 * @param {data} postData - Array of objects to post into schema
 * @param {schema} schema - Schema of mongoose db
 * @param {options} postData - Type of case call
 * @returns {Promise}
 */

const seed = (data = {}, schema, options = '') => {
    switch (options) {
        case 'createSeeder':
            return createSeeder(data, schema);
            break;
        case 'dropDatabase':
            return dropDatabase(schema);
            break;
        default:
            return new Promise((reject) => {reject('options not selected')});
            break;
    }
};

/**
 * createSeeder function - post all data in to schema
 * @function createSeeder
 * @param {data} postData - Array of objects to post into schema
 * @param {schema} schema - Schema of mongoose db
 * @returns {Promise}
 */
const createSeeder = (data, schema) => {

    return new Promise( (resolve, reject) => {
        try {
            const saveData =  schema.insertMany(data);
            resolve(saveData);
        } catch (e) {
            reject('schema reject -> ' + e)
        }
    });
}

/**
 * dropDatabase function - remove all data from schema
 * @function dropDatabase
 * @param {schema} schema - Schema of mongoose db
 * @returns {Promise}
 */
const dropDatabase = (schema) => {

    return new Promise( (resolve, reject) => {
        try {
            const tableData = schema.remove({});
            resolve(tableData);
        } catch (e) {
            reject('drop table reject -> ' + e)
        }
    });
}

module.exports = {
    seed
}
