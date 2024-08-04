/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

// USER paths
// const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./validators/validateUser");
// const { validateLogin } = require("./validators/validateLogin");
// const { hashPassword, verifyToken } = require("./services/auth");

// router.post("/register", validateUser, hashPassword, userControllers.add);
// router.post("/login", validateLogin, authControllers.login);

router.get("/users", userControllers.browse);
router.get("/user/:id", userControllers.read);

// RECIPE paths
const recipeControllers = require("./controllers/recipeControllers");
const validateRecipe = require("./validators/validateRecipe");

router.get("/recipes", recipeControllers.browse);
router.get("/recipes/:id", recipeControllers.read);
router.get("/recipes-cookingtechs", recipeControllers.browseByCookingTechs);
router.get("/recipes-varieties/:id", recipeControllers.readByRecipeIdVariety);

router.post("/recipe", recipeControllers.add);

// VARIETY paths
const varietyControllers = require("./controllers/varietyControllers");

router.get("/varieties", varietyControllers.browse);
router.get("/variety/:id", varietyControllers.read);
router.get("/varieties-cookingtechs", varietyControllers.browseByCookTechs);

// COOKING-TECH paths
const cookingTechControllers = require("./controllers/cooking_techControllers");

router.get("/cooking-techs", cookingTechControllers.browse);

// TYPES paths
const typeControllers = require("./controllers/typeControllers");

router.get("/types", typeControllers.browse);

// INGREDIENT paths
const ingredientControllers = require("./controllers/ingredientControllers");

router.get("/ingredients", ingredientControllers.browse);
router.get("/ingredient/:name", ingredientControllers.readByName);
router.post("/ingredient", ingredientControllers.add);

// QUANTITY paths
const quantityControllers = require("./controllers/quantityControllers");

router.get("/quantity/", quantityControllers.browse);
router.get(
  "/quantity/:value/:typeId",
  quantityControllers.readByValueAndTypeId
);
router.post("/quantity/", quantityControllers.add);

// INGREDIENT QUANTITY RECIPE paths
const ingredientQtRecipeControllers = require("./controllers/ingredientQtRecipeControllers");

router.get(
  "/ingredients-quantities-recipes",
  ingredientQtRecipeControllers.browse
);
router.get(
  "/ingredient-quantity-recipe/:id",
  ingredientQtRecipeControllers.readByRecipe
);

router.post("/ingredient-quantity-recipe", ingredientQtRecipeControllers.add);
router.put(
  "/ingredient-quantity-recipe/:id",
  ingredientQtRecipeControllers.edit
);

// AUTH WALL : Paths for authentificated users only
// router.use(verifyToken);

// Users - Paths for authentificated users only
router.put("/user/:id", validateUser, userControllers.edit);
router.delete("/user/:id", userControllers.destroy);

// Recipe - Paths for authentificated users only
router.post("/recipes", validateRecipe, recipeControllers.add);
router.put("/recipes/:id", validateRecipe, recipeControllers.edit);
router.delete("/recipes/:id", recipeControllers.destroy);

// Ingredient-quatity-recipe - Paths for authentificated users only

module.exports = router;
