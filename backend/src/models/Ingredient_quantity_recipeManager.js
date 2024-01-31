const AbstractManager = require("./AbstractManager");

class Ingredient_quantity_recipeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "ingredient_quantity_recipe" as configuration
    super({ table: "ingredient_quantity_recipe" });
  }

  // The C of CRUD - Create operation

  async create(ingredient_quantity_recipe) {
    const { recipe_id, ingredient_id, quantity_id } = ingredient_quantity_recipe;
    // Execute the SQL INSERT query to add a new ingredient_quantity_recipe to the "ingredient_quantity_recipe" table
    const [result] = await this.database.query(
      `insert into ${this.table} (recipe_id, ingredient_id, quantity_id) values (?, ?, ?)`,
      [recipe_id, ingredient_id, quantity_id]
    );

    // Return the ID of the newly inserted ingredient_quantity_recipe
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific ingredient_quantity_recipe by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the ingredient_quantity_recipe
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all ingredient_quantity_recipes from the "ingredient_quantity_recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of ingredient_quantity_recipes
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing ingredient_quantity_recipe

  async update(ingredient_quantity_recipe, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "ingredient_quantity_recipe" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [ingredient_quantity_recipe, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an ingredient_quantity_recipe by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = Ingredient_quantity_recipeManager;
