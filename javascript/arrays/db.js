export class DBStorage {
  static #listOfNames = [];
  static storageName = "db_name";

  static getFromStorage() {
    return JSON.parse(localStorage.getItem(this.storageName)) ?? [];
  }

  static saveInStorage() {
    localStorage.setItem(this.storageName, JSON.stringify(this.#listOfNames));
  }

  static set names(list) {
    this.#listOfNames = [...list];
    this.saveInStorage();
  }
}
