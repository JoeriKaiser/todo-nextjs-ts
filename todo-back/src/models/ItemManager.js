const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "item";

  update(item) {
    return this.connection.query(
      `update ${ItemManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ItemManager;