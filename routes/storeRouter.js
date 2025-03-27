const { Router } = require("express");
const storeController = require("../controllers/storeController");
const storeRouter = Router();

storeRouter.get("/", storeController.storeListGet);
storeRouter.get("/new", storeController.storeCreateGet);
storeRouter.post("/new", storeController.storeCreateItem);
storeRouter.get("/:id/category", storeController.storeCreateGet);
storeRouter.get("/:id/item", storeController.storeCreateGet);

module.exports = storeRouter;
