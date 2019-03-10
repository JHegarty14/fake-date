const pgPromise = require('pg-promise');

const connStr = 'postgresql://jackhegarty:tN20thsO=fs!@@db.us-west-2.rds.amazonaws.com:5432/postgres-test';

const pgp = pgPromise({});
const psql = pgp(connStr);

exports.psql = psql;