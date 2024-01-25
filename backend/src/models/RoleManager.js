const AbstractManager = require("./AbstractManager");

class RoleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "Role" as configuration
    super({ table: "roles" });
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific role by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the role
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "role" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }
}

module.exports = RoleManager;
