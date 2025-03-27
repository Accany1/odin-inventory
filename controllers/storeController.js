const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

async function storeListGet(req, res) {
    const items = await db.getAllItems();
    res.render("index", {
        title: "Store",
        inventory: items
    })
}

async function storeCreateGet(req, res) {
    res.render("createItem", {
      title: "Create Item",
    });
};

async function storeCreateItem(req, res) {
    await db.insertItem(req.body.name,req.body.pokename,req.body.category);
    res.redirect("/");
}

async function storeSearchCategoryGet(req, res) {
  const category = await db.searchCategory(req.query.category);
  res.render("viewCategory", 
    {
      title: "Search Category",
      inventory:category
    });
}

async function storeSearchGet(req, res) {
  const item = await db.searchMessages(req.params.id);
  res.render("viewItem", 
    {
        title: "View Item",
        item: item[0]
    });
}

module.exports = {
  storeListGet,
  storeCreateGet,
  storeCreateItem,
  storeSearchCategoryGet,
  storeSearchGet
};