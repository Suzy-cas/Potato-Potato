/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    const { username, email, hashedPassword, is_admin } = user;
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (username, email, hashed_password, is_admin) values (?, ?, ?, ?)`,
      [username, email, hashedPassword, is_admin]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select id, username, email, is_admin from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readWithRecipeInfo(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select user.id AS u_id, recipe.id AS r_id from ${this.table} INNER JOIN recipe ON user.id = recipe.user_id where user.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows;
  }

  async readAllNoPassword() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(
      `select id, username, email, is_admin from ${this.table}`
    );

    // Return the array of users
    return rows;
  }

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  async update(user, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "user" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [user, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }

  async deleteUserWithRecipeUpdate(userId, newUserId) {
    const connection = await this.database.getConnection();
    try {
      await connection.beginTransaction();

      // Update the user_id in the recipe table
      await connection.query(
        "UPDATE recipe SET user_id = ? WHERE user_id = ?",
        [newUserId, userId]
      );

      // Delete the user from the user table
      await connection.query("DELETE FROM user WHERE id = ?", [userId]);

      await connection.commit();
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }
}

module.exports = UserManager;
