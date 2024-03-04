const AbstractManager = require("../models/AbstractManager");

class QuantityManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "quantity" as configuration
    super({ table: "quantity" });
  }

  // The C of CRUD - Create operation

  async create(quantity) {
    const { value, unit } = quantity;
    // Execute the SQL INSERT query to add a new quantity to the "quantity" table
    const [result] = await this.database.query(
      `insert into ${this.table} (value, type_id) values (?, ?)`,
      [value, unit]
    );

    // Return the ID of the newly inserted quantity
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific quantity by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the quantity
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all quantitys from the "quantity" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of quantitys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing quantity

  async update(quantity, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "quantity" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [quantity, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an quantity by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = QuantityManager;
