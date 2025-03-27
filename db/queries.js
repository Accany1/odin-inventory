const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM inventory");
  return rows;
}

async function insertItem(name,pokename,category) {
  await pool.query("INSERT INTO inventory (name,pokename,category) VALUES ($1,$2,$3)", [name,pokename,category]);
}

module.exports = {
    getAllItems,
    insertItem
  };