const { Pool } = require('pg'); 

const PG_URI = 'postgres://dmwmjnyy:g8z4vFUjGIC4ZDAgQfVZqV5OE9nqvQK8@heffalump.db.elephantsql.com/dmwmjnyy';

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', callback); 
        return pool.query(text, params, callback); 
    }
}; 