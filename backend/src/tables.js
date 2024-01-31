/* ************************************************************************* */
// Register Data Managers for Tables
/* ************************************************************************* */

// Import the manager modules responsible for handling data operations on the tables
const UserManager = require("./models/UserManager");
const RoleManager = require("./models/RoleManager");
const PulpitManager = require("./models/PulpitManager");

const RecipeManager = require("./models/RecipeManager");

const Cooking_techManager = require("./models/Cooking_techManager");

const UserManager = require("./models/UserManager");

const RecipeManager = require("./models/RecipeManager");

const StepManager = require("./models/StepManager");

const Cooking_techManager = require("./models/Cooking_techManager");

const Potatoe_varietyManager = require("./models/Potatoe_varietyManager");

const Cooking_tech_varietyManager = require("./models/Cooking_tech_varietyManager");

const IngredientManager = require("./models/IngredientManager");

const QuantityManager = require("./models/QuantityManager");

const Ingredient_quantity_recipeManager = require("./models/Ingredient_quantity_recipeManager");

const TypeManager = require("./models/TypeManager");

const managers = [
  TypeManager,
  Ingredient_quantity_recipeManager,
  QuantityManager,
  IngredientManager,
  Cooking_tech_varietyManager,
  Potatoe_varietyManager,
  Cooking_techManager,
  StepManager,
  RecipeManager,
  UserManager,
  Cooking_techManager,
  RecipeManager,
  UserManager,
  RoleManager,
  PulpitManager,
  // Add other managers here
];

// Create an empty object to hold data managers for different tables
const tables = {};

// Register each manager as data access point for its table
managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();

  tables[manager.table] = manager;
});

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
