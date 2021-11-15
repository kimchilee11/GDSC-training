const knex = require('knex');
const config = require('../knexfile');

const conn = knex(config['development']);
const getConnection = conn;

const connectDatabase = async() => {
    try {
        const hehe = await conn.select('*').from('books');
        // console.log(hehe);
        console.log('successful');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connectDatabase,
    getConnection
}