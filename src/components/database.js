// database.js
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('path-to-your-database-file.db');

const getAllEquipment = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM equipment', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const updateEquipmentNumber = (id, newNumber) => {
  return new Promise((resolve, reject) => {
    db.run('UPDATE equipment SET number = ? WHERE id = ?', [newNumber, id], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports = { getAllEquipment, updateEquipmentNumber };
