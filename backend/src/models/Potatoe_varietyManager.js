/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class Potatoe_varietyManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "potatoe_variety" as configuration
    super({ table: "potatoe_variety" });
  }

  // The C of CRUD - Create operation

  async create(potatoe_variety) {
    const { name, outside_color, inside_color, origin, flesh, description } =
      potatoe_variety;
    // Execute the SQL INSERT query to add a new potatoe_variety to the "potatoe_variety" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, outside_color, inside_color, origin, flesh, description) values (?, ?, ?, ?, ?, ?)`,
      [name, outside_color, inside_color, origin, flesh, description]
    );

    // Return the ID of the newly inserted potatoe_variety
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific potatoe_variety by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the potatoe_variety
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all potatoe_varietys from the "potatoe_variety" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of potatoe_varietys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing potatoe_variety

  async update(potatoe_variety, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "potatoe_variety" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [potatoe_variety, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an potatoe_variety by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = Potatoe_varietyManager;
