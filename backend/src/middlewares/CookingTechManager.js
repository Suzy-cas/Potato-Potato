/* eslint-disable camelcase */
const AbstractManager = require("../models/AbstractManager");

class CookingTechManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "cooking_tech" as configuration
    super({ table: "cooking_tech" });
  }

  // The C of CRUD - Create operation

  async create(cooking_tech) {
    const { name } = cooking_tech;
    // Execute the SQL INSERT query to add a new cooking_tech to the "cooking_tech" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [name]
    );

    // Return the ID of the newly inserted cooking_tech
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific cooking_tech by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the cooking_tech
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all cooking_techs from the "cooking_tech" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of cooking_techs
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing cooking_tech

  async update(cooking_tech, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "cooking_tech" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [cooking_tech, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an cooking_tech by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = CookingTechManager;
