const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');
let db;

async function getDb() {
  console.log(path.join(__dirname, 'database.sqlite'))
  // If db is not initalized, initialize it by opening a new connection.
  if (!db) {
    db = await open({
      filename: path.join(__dirname, 'database.sqlite'),
      driver: sqlite3.Database,
    });
  }
  // return db connection
  return db;
}

module.exports = getDb;
