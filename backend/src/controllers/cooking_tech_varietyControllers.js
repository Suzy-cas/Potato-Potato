/* eslint-disable camelcase */
// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all cooking_tech_varietys from the database
    const cooking_tech_varieties = await tables.cooking_tech_variety.readAll();

    // Respond with the cooking_tech_varietys in JSON format
    res.status(200).json(cooking_tech_varieties);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific cooking_tech_variety from the database based on the provided ID
    const cooking_tech_variety = await tables.cooking_tech_variety.read(
      req.params.id
    );

    // If the cooking_tech_variety is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the cooking_tech_variety in JSON format
    if (cooking_tech_variety == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(cooking_tech_variety);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the cooking_tech_variety data from the request body
  const cooking_tech_variety = req.body;

  try {
    // Insert the cooking_tech_variety into the database
    await tables.cooking_tech_variety.update(
      cooking_tech_variety,
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
  // Extract the cooking_tech_variety data from the request body
  const cooking_tech_variety = req.body;

  try {
    // Insert the cooking_tech_variety into the database
    const insertId = await tables.cooking_tech_variety.create(
      cooking_tech_variety
    );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted cooking_tech_variety
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the cooking_tech_variety data from the request body
  try {
    // Insert the cooking_tech_variety into the database
    await tables.cooking_tech_variety.delete(req.params.id);

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
  edit,
  add,
  destroy,
};
