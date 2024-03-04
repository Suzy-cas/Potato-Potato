/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class CookingTechVarietyManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "cooking_tech_variety" as configuration
    super({ table: "cooking_tech_variety" });
  }

  // The C of CRUD - Create operation

  async create(cooking_tech_variety) {
    const { cooking_tech_id, potato_variety_id } = cooking_tech_variety;
    // Execute the SQL INSERT query to add a new cooking_tech_variety to the "cooking_tech_variety" table
    const [result] = await this.database.query(
      `insert into ${this.table} (cooking_tech_id, potato_variety_id) values (?, ?)`,
      [cooking_tech_id, potato_variety_id]
    );

    // Return the ID of the newly inserted cooking_tech_variety
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific cooking_tech_variety by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the cooking_tech_variety
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all cooking_tech_varietys from the "cooking_tech_variety" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of cooking_tech_varietys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing cooking_tech_variety

  async update(cooking_tech_variety, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "cooking_tech_variety" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [cooking_tech_variety, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an cooking_tech_variety by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = CookingTechVarietyManager;
