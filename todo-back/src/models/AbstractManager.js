class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table
  }

  find(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [id]);
  }
}