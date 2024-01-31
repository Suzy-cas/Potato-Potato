/* eslint-disable camelcase */
// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all potatoe_varietys from the database
    const potatoe_variety = await tables.potatoe_variety.readAll();

    // Respond with the potatoe_varietys in JSON format
    res.status(200).json(potatoe_variety);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific potatoe_variety from the database based on the provided ID
    const potatoe_variety = await tables.potatoe_variety.read(req.params.id);

    // If the potatoe_variety is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the potatoe_variety in JSON format
    if (potatoe_variety == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(potatoe_variety);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the potatoe_variety data from the request body
  const potatoe_variety = req.body;

  try {
    // Insert the potatoe_variety into the database
    await tables.potatoe_variety.update(potatoe_variety, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the potatoe_variety data from the request body
  const potatoe_variety = req.body;

  try {
    // Insert the potatoe_variety into the database
    const insertId = await tables.potatoe_variety.create(potatoe_variety);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted potatoe_variety
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the potatoe_variety data from the request body
  try {
    // Insert the potatoe_variety into the database
    await tables.potatoe_variety.delete(req.params.id);

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
