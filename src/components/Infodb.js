// Infodb.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('din_database_fil.db');

// Sjekk om tabellen allerede eksisterer
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='equipment'", (err, row) => {
  if (!row) {
    // Lag tabellen hvis den ikke eksisterer
    db.run(`
      CREATE TABLE equipment (
        id INTEGER PRIMARY KEY,
        name TEXT,
        number INTEGER,
        available INTEGER,
        status INTEGER
      )
    `);
  }
  db.close();
});
