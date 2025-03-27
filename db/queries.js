const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM inventory");
  return rows;
}

async function insertItem(name,pokename,category) {
  await pool.query("INSERT INTO inventory (name,pokename,category) VALUES ($1,$2,$3)", [name,pokename,category]);
}

async function searchCategory(category) {
  const { rows } = await pool.query("SELECT * FROM inventory WHERE (category) ILIKE ($1)", [`%${category}%`]);
  return rows;
}

async function searchMessages(id) {
  const { rows } = await pool.query("SELECT * FROM inventory WHERE (id) = ($1)", [id]);
  return rows;
}

module.exports = {
    getAllItems,
    insertItem,
    searchCategory,
    searchMessages
  };