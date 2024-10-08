/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  // The C of CRUD - Create operation

  async create(recipe) {
    const {
      title,
      picture,
      difficulty,
      prep_time,
      cooking_time,
      steps,
      user_id,
      cooking_tech_id,
      is_approved,
    } = recipe;

    const [result] = await this.database.query(
      `insert into ${this.table} (  title,
        picture,
        difficulty,
        prep_time,
        cooking_time,
        steps, user_id, cooking_tech_id, is_approved) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        picture,
        difficulty,
        prep_time,
        cooking_time,
        steps,
        user_id,
        cooking_tech_id,
        is_approved,
      ]
    );
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readLastId() {
    try {
      const [rows] = await this.database.query(
        `SELECT id FROM ${this.table} ORDER BY id DESC LIMIT 1`
      );
      return rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  // A faire : passer en requête préparée
  async readAllByCookingTech() {
    try {
      const [rows] = await this.database.query(
        `SELECT DISTINCT
        ${this.table}.id,
        title,
        ${this.table}.picture,
        difficulty,
        prep_time,
        cooking_time,
        steps,
        is_approved,
        cooking_tech.name AS cooking_tech,
        potato_variety.name AS potato_variety
    FROM 
    ${this.table}
    JOIN 
        cooking_tech ON ${this.table}.cooking_tech_id = cooking_tech.id
    JOIN 
        cooking_tech_variety ON cooking_tech_variety.cooking_tech_id = cooking_tech.id
    JOIN 
        potato_variety ON potato_variety.id = cooking_tech_variety.potato_variety_id`
      );

      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async readByRecipeIdVariety(id) {
    const [rows] = await this.database.query(
      `SELECT
      ${this.table}.id,
      potato_variety.name AS potato_variety
  FROM 
      ${this.table}
  JOIN 
      cooking_tech ON ${this.table}.cooking_tech_id = cooking_tech.id
  JOIN 
      cooking_tech_variety ON cooking_tech_variety.cooking_tech_id = cooking_tech.id
  JOIN 
      potato_variety ON potato_variety.id = cooking_tech_variety.potato_variety_id
  WHERE 
      ${this.table}.id = ?`,
      [id]
    );
    return rows;
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

  async updateUserId(userId, newUserId) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      "UPDATE recipe SET user_id = ? WHERE user_id = ?",
      [newUserId, userId]
    );

    // Return the first row of the result, which represents the user
    return rows;
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
