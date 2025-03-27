const { Router } = require("express");
const storeController = require("../controllers/storeController");
const storeRouter = Router();

storeRouter.get("/", storeController.storeListGet);
storeRouter.get("/new", storeController.storeCreateGet);
storeRouter.post("/new", storeController.storeCreateItem);
storeRouter.get("/category", storeController.storeSearchCategoryGet);
storeRouter.get("/:id/details", storeController.storeSearchGet);
storeRouter.get("/:id/delete", storeController.storeDeleteGet);


module.exports = storeRouter;
