const DB_NAME = "students";
const DB_VERSION = 1;

class IndexDB {
  static #request = null;

  static async createDataBase() {
    this.#request = await indexedDB.open(DB_NAME, DB_VERSION);
  }

  static async deleteDataBase() {
    await indexedDB.deleteDatabase(DB_NAME);
  }
}
