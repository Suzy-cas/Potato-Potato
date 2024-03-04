const AbstractManager = require("../models/AbstractManager");

class TypeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "type" as configuration
    super({ table: "type" });
  }

  // The C of CRUD - Create operation

  async create(type) {
    const { name } = type;
    // Execute the SQL INSERT query to add a new type to the "type" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [name]
    );

    // Return the ID of the newly inserted type
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific type by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the type
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all types from the "type" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of types
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing type

  async update(type, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "type" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [type, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an type by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = TypeManager;
