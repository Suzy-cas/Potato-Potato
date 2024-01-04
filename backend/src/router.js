const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const roleControllers = require("./controllers/roleControllers");
const userControllers = require("./controllers/userControllers");
const pulpitControllers = require("./controllers/pulpitControllers");
const { validateUser } = require("./services/validateUser");

// Route to get a list of items
router.get("/users", userControllers.browse);
router.get("/roles", roleControllers.browse);
router.get("/pulpits", pulpitControllers.browse);

// Route to get a specific item by ID
router.get("/users/:id", userControllers.read);
router.get("/roles/:id", roleControllers.read);
router.get("/pulpits/:id", pulpitControllers.read);

// Route to edit a specific item by ID
router.put("/users/:id", userControllers.edit);

// Route to add a new item
router.post("/users", validateUser, userControllers.add);

// Route to destroy a specific item, user, etc.
router.delete("/users/:id", userControllers.destroy);

/* ************************************************************************* */

module.exports = router;
