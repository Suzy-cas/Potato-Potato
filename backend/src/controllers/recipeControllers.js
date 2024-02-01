// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all recipes from the database
    const recipes = await tables.recipe.readAll();

    // Respond with the recipes in JSON format
    res.status(200).json(recipes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseByCookingTechs = async (req, res, next) => {
  try {
    // Fetch all recipes from the database
    const recipe = await tables.recipe.readAllByCookingTech();

    // Respond with the recipes in JSON format
    res.status(200).json(recipe);
  } catch (err) {
    console.error(err);
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific recipe from the database based on the provided ID
    const recipe = await tables.recipe.read(req.params.id);

    // If the recipe is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the recipe in JSON format
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(recipe);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the recipe data from the request body
  const recipe = req.body;

  try {
    // Insert the recipe into the database
    await tables.recipe.update(recipe, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the recipe data from the request body
  const recipe = req.body;

  try {
    // Insert the recipe into the database
    const insertId = await tables.recipe.create(recipe);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted recipe
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the recipe data from the request body
  try {
    // Insert the recipe into the database
    await tables.recipe.delete(req.params.id);

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
  browseByCookingTechs,
  read,
  edit,
  add,
  destroy,
};
