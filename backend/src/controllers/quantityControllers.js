// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all quantitys from the database
    const quantitys = await tables.quantity.readAll();

    // Respond with the quantitys in JSON format
    res.status(200).json(quantitys);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific quantity from the database based on the provided ID
    const quantity = await tables.quantity.read(req.params.id);

    // If the quantity is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the quantity in JSON format
    if (quantity == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(quantity);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the quantity data from the request body
  const quantity = req.body;

  try {
    // Insert the quantity into the database
    await tables.quantity.update(quantity, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the quantity data from the request body
  const quantity = req.body;

  try {
    // Insert the quantity into the database
    const insertId = await tables.quantity.create(quantity);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted quantity
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the quantity data from the request body
  try {
    // Insert the quantity into the database
    await tables.quantity.delete(req.params.id);

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
