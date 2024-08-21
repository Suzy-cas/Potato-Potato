/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

const path = require("path");

const multer = require("multer");

const uploadAvatar = multer({
  dest: "public/uploads/avatars",
  fileFilter: (_req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      `Error: File upload only supports the following filetypes - ${fileTypes}`
    );
    return "";
  },
});
const uploadRecipeImage = multer({
  dest: "public/uploads/recipes",
  fileFilter: (_req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      `Error: File upload only supports the following filetypes - ${fileTypes}`
    );
    return "";
  },
});
const uploads = require("./services/upload");

// USER paths
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const {
  validateUser,
  validateModifiedUser,
} = require("./validators/validateUser");
const { validateLogin } = require("./validators/validateLogin");
const { hashPassword, verifyToken } = require("./services/auth");

router.post("/register", validateUser, hashPassword, userControllers.add);
router.post("/login", validateLogin, authControllers.login);
router.get("/users", userControllers.browse);
router.get("/users", userControllers.browse);
router.get("/user/:id", userControllers.read);

// RECIPE paths
const recipeControllers = require("./controllers/recipeControllers");
const validateRecipe = require("./validators/validateRecipe");

router.get("/recipes", recipeControllers.browse);
router.get("/recipe/:id", recipeControllers.read);
router.get("/recipes-cookingtechs", recipeControllers.browseByCookingTechs);
router.get("/recipes-varieties/:id", recipeControllers.readByRecipeIdVariety);

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

// QUANTITY paths
const quantityControllers = require("./controllers/quantityControllers");

router.get("/quantity/", quantityControllers.browse);
router.get(
  "/quantity/:value/:typeId",
  quantityControllers.readByValueAndTypeId
);

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

// AUTH WALL : Paths for authentificated users only

// Middleware verifying if user is logged for routes security
router.use(verifyToken);

// Users - Paths for authentificated users only
router.get("/user/recipes-infos/:id", userControllers.readWithRecipeInfo);
router.put("/user/:id", validateModifiedUser, userControllers.edit);
router.delete("/user/:id", userControllers.destroy);
router.delete(
  "/user/recipe-info/:id",
  userControllers.destroyUserWithRecipeUpdate
);

// Recipe - Paths for authentificated users only
router.post("/recipe", recipeControllers.add);
router.put("/recipe/:id", validateRecipe, recipeControllers.edit);
router.delete("/recipe/:id", recipeControllers.destroy);

// Ingredient Quantity Recipe paths for authentificated users only
router.post("/ingredient-quantity-recipe", ingredientQtRecipeControllers.add);
router.put(
  "/ingredient-quantity-recipe/:id",
  ingredientQtRecipeControllers.edit
);

// Quantity paths for authentificated users only
router.post("/quantity", quantityControllers.add);
router.put("/quantity/:id", quantityControllers.edit);

// Ingredient paths for authentificated users only
router.post("/ingredient", ingredientControllers.add);
router.put("/ingredient/:id", ingredientControllers.edit);

// Paths for upload users avatars and recipes pictures
router.post(
  "/uploads/recipes/:id",
  uploadRecipeImage.single("recipePic"),
  uploads.uploadRecipePictures
);
router.post(
  "/uploads/avatars/:id",
  uploadAvatar.single("avatar"),
  uploads.uploadAvatars
);
router.put("/users/edit-avatar/:id", userControllers.editAvatar);
// ROLE WALL

module.exports = router;
