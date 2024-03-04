/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class IngredientQtRecipeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "ingredientQtRecipe" as configuration
    super({ table: "ingredient_quantity_recipe" });
  }

  // The C of CRUD - Create operation

  async create(ingredientQtRecipe) {
    const { recipe_id, ingredient_id, quantity_id } = ingredientQtRecipe;
    // Execute the SQL INSERT query to add a new ingredientQtRecipe to the "ingredientQtRecipe" table
    const [result] = await this.database.query(
      `insert into ${this.table} (recipe_id, ingredient_id, quantity_id) values (?, ?, ?)`,
      [recipe_id, ingredient_id, quantity_id]
    );

    // Return the ID of the newly inserted ingredientQtRecipe
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific ingredientQtRecipe by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the ingredientQtRecipe
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all ingredientQtRecipes from the "ingredientQtRecipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of ingredientQtRecipes
    return rows;
  }

  async readByRecipe(recipe) {
    const [rows] = await this.database.query(
      `SELECT recipe_id,
      ingredient.name AS ingredient,
      quantity.value AS ingredient_quantity,
      type.name AS quantity_type
      FROM
      ${this.table}
      JOIN ingredient
      ON ingredient_id = ingredient.id
      JOIN quantity
      ON quantity_id = quantity.id
      JOIN type 
      ON type_id = type.id
      WHERE recipe_id = ?`,
      [recipe]
    );
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing ingredientQtRecipe

  async update(ingredientQtRecipe, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "ingredientQtRecipe" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [ingredientQtRecipe, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an ingredientQtRecipe by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = IngredientQtRecipeManager;
