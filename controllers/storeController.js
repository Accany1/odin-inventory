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

module.exports = {
  storeListGet,
  storeCreateGet,
  storeCreateItem
};