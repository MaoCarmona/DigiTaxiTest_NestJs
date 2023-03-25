import * as mysql from 'mysql2';

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'digitaxi'
});

export {connection};