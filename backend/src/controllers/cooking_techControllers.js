// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all cooking_techs from the database
    const cooking_techs = await tables.cooking_tech.readAll();

    // Respond with the cooking_techs in JSON format
    res.status(200).json(cooking_techs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific cooking_tech from the database based on the provided ID
    const cooking_tech = await tables.cooking_tech.read(req.params.id);

    // If the cooking_tech is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the cooking_tech in JSON format
    if (cooking_tech == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(cooking_tech);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the cooking_tech data from the request body
  const cooking_tech = req.body;

  try {
    // Insert the cooking_tech into the database
    await tables.cooking_tech.update(cooking_tech, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the cooking_tech data from the request body
  const cooking_tech = req.body;

  try {
    // Insert the cooking_tech into the database
    const insertId = await tables.cooking_tech.create(cooking_tech);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted cooking_tech
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the cooking_tech data from the request body
  try {
    // Insert the cooking_tech into the database
    await tables.cooking_tech.delete(req.params.id);

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
