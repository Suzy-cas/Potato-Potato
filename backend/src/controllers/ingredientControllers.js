// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all ingredients from the database
    const ingredients = await tables.ingredient.readAll();

    // Respond with the ingredients in JSON format
    res.status(200).json(ingredients);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific ingredient from the database based on the provided ID
    const ingredient = await tables.ingredient.read(req.params.id);

    // If the ingredient is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the ingredient in JSON format
    if (ingredient == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(ingredient);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByName = async (req, res, next) => {
  try {
    // Fetch a specific ingredient from the database based on the provided name
    const ingredient = await tables.ingredient.readByName(req.params.name);

    // If the ingredient is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the ingredient in JSON format
    if (ingredient == null) {
      res.send("No ingredient with this name.");
    } else {
      res.status(200).json(ingredient);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the ingredient data from the request body
  const ingredient = req.body;

  try {
    // Insert the ingredient into the database
    await tables.ingredient.update(ingredient, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the ingredient data from the request body
  const ingredient = req.body;

  try {
    // Insert the ingredient into the database
    const insertId = await tables.ingredient.create(ingredient);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted ingredient
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the ingredient data from the request body
  try {
    // Insert the ingredient into the database
    await tables.ingredient.delete(req.params.id);

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
  readByName,
  edit,
  add,
  destroy,
};
