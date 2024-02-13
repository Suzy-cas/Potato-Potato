const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");

router.post("/register", authControllers.add);
router.post("/login", authControllers.login);

const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./validators/validateUser");
const { hashPassword } = require("./services/auth");

router.get("/users", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.post("/users", validateUser, userControllers.add);
router.put("/user/:id", validateUser, userControllers.edit);
router.delete("/user/:id", userControllers.destroy);

const recipeControllers = require("./controllers/recipeControllers");
const validateRecipe = require("./validators/validateRecipe");

router.get("/recipes", recipeControllers.browse);
router.get("/recipes/:id", recipeControllers.read);
router.post("/recipes", validateRecipe, hashPassword, recipeControllers.add);
router.put("/recipes/:id", validateRecipe, recipeControllers.edit);
router.delete("/recipes/:id", recipeControllers.destroy);
// Routes spécifiques avec jointures
router.get("/recipes-cookingtechs", recipeControllers.browseByCookingTechs);

const varietyControllers = require("./controllers/varietyControllers");

router.get("/varieties", varietyControllers.browse);
router.get("/variety/:id", varietyControllers.read);
router.get("/varieties-cookingtechs", varietyControllers.browseByCookTechs);

module.exports = router;
