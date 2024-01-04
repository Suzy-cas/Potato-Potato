const AbstractManager = require("./AbstractManager");

class PulpitManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "pulpit" as configuration
    super({ table: "pulpits" });
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific pulpit by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the pulpit
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "pulpit" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }
}

module.exports = PulpitManager;
