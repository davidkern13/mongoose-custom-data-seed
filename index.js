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
            return new Promise((reject) => {reject('options data object incorrect or not selected options')});
            break;
    }
};

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

module.exports = {
    seed
}