/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "recipe" as configuration
    super({ table: "recipe" });
  }

  // The C of CRUD - Create operation

  async create(recipe) {
    const {
      title,
      difficulty,
      cooking_time,
      step_id,
      user_id,
      cooking_tech_id,
      is_approved,
    } = recipe;
    // Execute the SQL INSERT query to add a new recipe to the "recipe" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, difficulty, cooking_time, step_id, user_id, cooking_tech_id, is_approved) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        difficulty,
        cooking_time,
        step_id,
        user_id,
        cooking_tech_id,
        is_approved,
      ]
    );

    // Return the ID of the newly inserted recipe
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific recipe by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the recipe
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all recipes from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
    return rows;
  }

  async readAllByCookingTech() {
    try {
      const [rows] = await this.database.query(
        `SELECT DISTINCT
        ${this.table}.id,
        title,
        difficulty,
        cooking_time,
        step_id,
        cooking_tech.name AS cooking_tech,
        potatoe_variety.name AS potatoe_variety
    FROM 
    ${this.table}
    JOIN 
        cooking_tech ON ${this.table}.cooking_tech_id = cooking_tech.id
    JOIN 
        cooking_tech_variety ON cooking_tech_variety.cooking_tech_id = cooking_tech.id
    JOIN 
        potatoe_variety ON potatoe_variety.id = cooking_tech_variety.potatoe_variety_id`
      );

      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing recipe

  async update(recipe, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "recipe" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [recipe, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an recipe by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = RecipeManager;
