/** Database for lunchly */

const pg = require("pg");

const { user, password, host, port } = require('./dbSecrets.json');

let DB_URI = `postgresql://`;
if (user) {
    DB_URI += `${user}:${password}@${host}:${port}/`;
} else {
    DB_URI += `/`;
}

if (process.env.NODE_ENV === 'test') {
    DB_URI += 'lunchly_test';
} else {
    DB_URI += 'lunchly';
}

let db = new pg.Client({ connectionString: DB_URI });

db.connect();

module.exports = db;
