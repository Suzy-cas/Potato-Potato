// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all ingredientQtRecipes from the database
    const ingredientQtRecipes =
      await tables.ingredient_quantity_recipe.readAll();

    // Respond with the ingredientQtRecipes in JSON format
    res.status(200).json(ingredientQtRecipes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific ingredientQtRecipe from the database based on the provided ID
    const ingredientQtRecipe = await tables.ingredient_quantity_recipe.read(
      req.params.id
    );

    // If the ingredientQtRecipe is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the ingredientQtRecipe in JSON format
    if (ingredientQtRecipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(ingredientQtRecipe);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByRecipe = async (req, res, next) => {
  try {
    // Fetch a specific ingredientQtRecipe from the database based on the provided ID
    const ingredientQtRecipe =
      await tables.ingredient_quantity_recipe.readByRecipe(req.params.id);

    // If the ingredientQtRecipe is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the ingredientQtRecipe in JSON format
    if (ingredientQtRecipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(ingredientQtRecipe);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the ingredientQtRecipe data from the request body
  const ingredientQtRecipe = req.body;

  try {
    // Insert the ingredientQtRecipe into the database
    await tables.ingredient_quantity_recipe.update(
      ingredientQtRecipe,
      req.params.id
    );

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the ingredientQtRecipe data from the request body
  const ingredientQtRecipe = req.body;

  try {
    // Insert the ingredientQtRecipe into the database
    const insertId = await tables.ingredient_quantity_recipe.create(
      ingredientQtRecipe
    );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted ingredientQtRecipe
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the ingredientQtRecipe data from the request body
  try {
    // Insert the ingredientQtRecipe into the database
    await tables.ingredientQtRecipe.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  readByRecipe,
  edit,
  add,
  destroy,
};
