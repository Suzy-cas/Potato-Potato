const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./validators/validateUser");
const { validateLogin } = require("./validators/validateLogin");
const { hashPassword } = require("./services/auth");

router.post("/register", validateUser, hashPassword, userControllers.add);
router.post("/login", validateLogin, authControllers.login);

router.get("/users", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", validateUser, userControllers.edit);
router.delete("/user/:id", userControllers.destroy);

const recipeControllers = require("./controllers/recipeControllers");
const validateRecipe = require("./validators/validateRecipe");

router.get("/recipes", recipeControllers.browse);
router.get("/recipes/:id", recipeControllers.read);
router.post("/recipes", validateRecipe, recipeControllers.add);
router.put("/recipes/:id", validateRecipe, recipeControllers.edit);
router.delete("/recipes/:id", recipeControllers.destroy);
// Routes spécifiques avec jointures
router.get("/recipes-cookingtechs", recipeControllers.browseByCookingTechs);

const varietyControllers = require("./controllers/varietyControllers");

router.get("/varieties", varietyControllers.browse);
router.get("/variety/:id", varietyControllers.read);
router.get("/varieties-cookingtechs", varietyControllers.browseByCookTechs);

const typeControllers = require("./controllers/typeControllers");

router.get("/types", typeControllers.browse);

const ingredientControllers = require("./controllers/ingredientControllers");

router.get("/ingredients", ingredientControllers.browse);

const ingredientQtRecipeControllers = require("./controllers/ingredientQtRecipeControllers");

router.get(
  "/ingredient-quantity-recipe/:id",
  ingredientQtRecipeControllers.readByRecipe
);

router.post("/ingredient-quantity-recipe", ingredientQtRecipeControllers.add);

router.put(
  "/ingredient-quantity-recipe/:id",
  ingredientQtRecipeControllers.edit
);

module.exports = router;
