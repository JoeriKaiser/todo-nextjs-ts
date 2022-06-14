const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table
  }

  find(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [id]);
  }
}