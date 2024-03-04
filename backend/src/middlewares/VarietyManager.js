/* eslint-disable camelcase */
const AbstractManager = require("../models/AbstractManager");

class potato_varietyManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "potato_variety" as configuration
    super({ table: "potato_variety" });
  }

  // The C of CRUD - Create operation

  async create(potato_variety) {
    const { name, outside_color, inside_color, origin, flesh, description } =
      potato_variety;
    // Execute the SQL INSERT query to add a new potato_variety to the "potato_variety" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, outside_color, inside_color, origin, flesh, description) values (?, ?, ?, ?, ?, ?)`,
      [name, outside_color, inside_color, origin, flesh, description]
    );

    // Return the ID of the newly inserted potato_variety
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific potato_variety by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the potato_variety
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all potato_varietys from the "potato_variety" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of potato_varietys
    return rows;
  }

  async readByCookTechs() {
    const [rows] = await this.database.query(
      `SELECT
      potato_variety.id, 
      potato_variety.name, 
      outside_color, 
      inside_color, 
      origin, 
      flesh, 
      description,
      recipe.id AS recipe_id, 
      cooking_tech.name AS cooking_tech
      FROM potato_variety 
      JOIN cooking_tech_variety 
      ON potato_variety_id = potato_variety.id 
      JOIN cooking_tech 
      ON cooking_tech_id = cooking_tech.id
      JOIN recipe
      ON recipe.cooking_tech_id = cooking_tech.id`
    );

    // Return the array of potato_varietys
    return rows;
  }
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing potato_variety

  async update(potato_variety, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "potato_variety" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [potato_variety, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an potato_variety by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = potato_varietyManager;
