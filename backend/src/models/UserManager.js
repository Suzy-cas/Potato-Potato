const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "users" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "users" table
    const [result] = await this.database.query(
      `insert into ${this.table} (username, email, password, role_id) values (?,?,?,?)`,
      [user.username, user.email, user.password, user.role_id]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation

  async update(id, user) {
    const [result] = await this.database.query(
      "UPDATE users SET username = ?, email = ?, password = ?, role_id = ? WHERE id = ?",
      [user.username, user.email, user.password, user.role_id, id]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to delete a specific user by its ID
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = UserManager;
