// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all types from the database
    const types = await tables.type.readAll();

    // Respond with the types in JSON format
    res.status(200).json(types);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific type from the database based on the provided ID
    const type = await tables.type.read(req.params.id);

    // If the type is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the type in JSON format
    if (type == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(type);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the type data from the request body
  const type = req.body;

  try {
    // Insert the type into the database
    await tables.type.update(type, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the type data from the request body
  const type = req.body;

  try {
    // Insert the type into the database
    const insertId = await tables.type.create(type);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted type
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the type data from the request body
  try {
    // Insert the type into the database
    await tables.type.delete(req.params.id);

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
