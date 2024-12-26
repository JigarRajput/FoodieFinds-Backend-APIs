const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
let db;

async function getDb() {
  // If db is not initalized, initialize it by opening a new connection.
  if (!db) {
    db = await open({
      filename: './database/database.sqlite',
      driver: sqlite3.Database,
    });
  }
  // return db connection
  return db;
}

module.exports = getDb;
