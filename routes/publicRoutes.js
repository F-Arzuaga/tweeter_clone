const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const authenticatePassport = require("../middlewares/passportAuthenticate");
const verifyAuth = require("../middlewares/verifyAuthenticated");
const verifyNoAuth = require("../middlewares/verifyNoAuthenticated");

// Rutas Públicas:
// ...
publicRouter.get("/", verifyNoAuth, pagesController.home);
publicRouter.get("/welcome", verifyAuth, pagesController.welcome);
publicRouter.post("/login", verifyAuth, authenticatePassport);
publicRouter.post("/users", pagesController.store);

publicRouter.get("/enConstruccion", pagesController.error);

module.exports = publicRouter;
