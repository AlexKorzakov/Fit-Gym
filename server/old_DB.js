const Pool = require('pg').Pool;
const pool = new Pool({
	user: "postgres",
	password: 'adminroot',
	host: 'localhost',
	port: 5432,
	database: 'fitness_gym'
});

module.exports = pool;