/* eslint-disable camelcase */
// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all potato_varietys from the database
    const potato_variety = await tables.potato_variety.readAll();

    // Respond with the potato_varietys in JSON format
    res.status(200).json(potato_variety);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseByCookTechs = async (req, res, next) => {
  try {
    // Fetch all potato_varietys from the database
    const potato_variety = await tables.potato_variety.readByCookTechs();

    // Respond with the potato_varietys in JSON format
    res.status(200).json(potato_variety);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific potato_variety from the database based on the provided ID
    const potato_variety = await tables.potato_variety.read(req.params.id);

    // If the potato_variety is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the potato_variety in JSON format
    if (potato_variety == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(potato_variety);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
// const edit = async (req, res, next) => {
//   // Extract the potato_variety data from the request body
//   const potato_variety = req.body;

//   try {
//     // Insert the potato_variety into the database
//     await tables.potato_variety.update(potato_variety, req.params.id);

//     // Respond with HTTP 204 (No Content)
//     res.sendStatus(204);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the potato_variety data from the request body
//   const potato_variety = req.body;

//   try {
//     // Insert the potato_variety into the database
//     const insertId = await tables.potato_variety.create(potato_variety);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted potato_variety
//     res.status(201).json({ ...req.body, id: insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
// const destroy = async (req, res, next) => {
//   // Extract the potato_variety data from the request body
//   try {
//     // Insert the potato_variety into the database
//     await tables.potato_variety.delete(req.params.id);

//     // Respond with HTTP 204 (No Content)
//     res.sendStatus(204);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// Ready to export the controller functions
module.exports = {
  browse,
  browseByCookTechs,
  read,
  // edit,
  // add,
  // destroy,
};
