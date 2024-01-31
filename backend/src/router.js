const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./validators/validateUser");

router.get("/users", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.post("/users", validateUser, userControllers.add);
router.put("/user/:id", validateUser, userControllers.edit);
router.delete("/user/:id", userControllers.destroy);

const stepControllers = require("./controllers/stepControllers");
const validateStep = require("./validators/validateStep");

router.get("/steps", stepControllers.browse);
router.get("/steps/:id", stepControllers.read);
router.post("/steps", validateStep, stepControllers.add);
router.put("/steps/:id", validateStep, stepControllers.edit);
router.delete("/steps/:id", stepControllers.destroy);

const recipeControllers = require("./controllers/recipeControllers");
const validateRecipe = require("./validators/validateRecipe");

router.get("/recipes", recipeControllers.browse);
router.get("/recipes/:id", recipeControllers.read);
router.post("/recipes", validateRecipe, recipeControllers.add);
router.put("/recipes/:id", validateRecipe, recipeControllers.edit);
router.delete("/recipes/:id", recipeControllers.destroy);

const varietyControllers = require("./controllers/varietyControllers");

router.get("/varieties", varietyControllers.browse);
router.get("/variety/:id", varietyControllers.read);

module.exports = router;
