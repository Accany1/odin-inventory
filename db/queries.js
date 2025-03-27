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

async function searchItem(id) {
  const { rows } = await pool.query("SELECT * FROM inventory WHERE (id) = ($1)", [id]);
  return rows;
}

async function deleteItem(id) {
  await pool.query("DELETE FROM inventory WHERE (id) = ($1)", [id]);
}

module.exports = {
    getAllItems,
    insertItem,
    searchCategory,
    searchItem,
    deleteItem
  };