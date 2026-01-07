import { DBStorage } from "./db.js";

const studentList = [];
const studentName = document.querySelector("input");
const templateItem = document.getElementById("item");

/**
 * Rafraichir la liste
 * @returns {void}
 */
function refreshList() {
  const list = document.querySelector(".list");
  list.replaceChildren();
  studentList.forEach((student) => insertStudentToDOMList(student, list));
}

window.addEventListener("load", () => {
  studentList.push(...DBStorage.getFromStorage());
  refreshList();
});

/**
 * Retourne un identifiant unique
 * @returns {string}
 */
const generateUID = () => {
  return crypto.randomUUID();
};

/**
 * Supprimer un etudiant de la liste eu utilisant l'identifiant de l'etudiant
 * @param {HTMLUListElement} listToRemoveFrom
 * @param {string} studentId
 * @returns {void}
 */
function deleteFromListById(listToRemoveFrom, studentId) {
  const studentToDeleteIndex = studentList.findIndex(
    (student) => student.id === studentId
  );

  if (studentToDeleteIndex === -1) return;

  studentList.splice(studentToDeleteIndex, 1);
  listToRemoveFrom.querySelector(`[data-id="${studentId}"]`).remove();
  DBStorage.names = studentList;
}

/**
 * Avoir un clone unique du template pour l'affichage dans la liste
 * @returns {HTMLLIElement} un item du DOM
 */
const getItemCloned = () => {
  return templateItem.content.cloneNode(true).querySelector("li");
};

/**
 * Inserer un etudiant dans la liste des etudiants visible dans le DOM
 * @param {Student} student un object ayant la structure d'un etudiant
 * @param {HTMLUListElement} target
 * @returns {void}
 */
function insertStudentToDOMList(student, target) {
  const item = getItemCloned();
  item.querySelector("p").innerText = student.name;
  item.dataset.id = student.id;

  const label = `Enlever l'etudiant ${student.name} de la liste`;
  const deleteButton = item.querySelector("button");
  deleteButton.setAttribute("aria-label", label);
  deleteButton.setAttribute("title", label);
  deleteButton.onclick = () => deleteFromListById(target, student.id);

  target.appendChild(item);
  item.scrollIntoView(); // va scroller a l'emplacement ou l'element est place dans la page pour qu'il soit visible
}

/**
 * Trier la liste par ordre alphabetique (A a Z)
 * @returns { void }
 */
function sortStudentList() {
  studentList.sort((studentA, studentB) =>
    studentA.name.toLowerCase().localeCompare(studentB.name.toLowerCase())
  );
}

/**
 * Mettre la premiere lettre du nom en majuscule
 * @param {string} name mot a tranformer
 * @returns {string}
 */
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

/**
 * Effacer le contenue de l'input
 * @returns {void}
 */
function clearField() {
  studentName.value = "";
}

/**
 * Ajouter l'etudiant dans la liste des noms
 * @param {string} nameToAdd nom de l'etudiant a ajouter dans la liste
 * @returns {void}
 */
function addToStudentList(nameToAdd) {
  const newStudent = {
    id: generateUID(),
    name: capitalize(nameToAdd),
    createdAt: new Date().toString(),
  };
  studentList.push(newStudent);
  DBStorage.names = studentList;
}

/**
 * Manager le processus d'ajout un etudiant
 * @param {string} studentName nom de l'etudiant
 * @returns {void}
 */
function processAddition(studentName) {
  const hasThisStudentAlready = studentList.find(
    (student) =>
      student.name.toLocaleLowerCase() === studentName.toLocaleLowerCase()
  );

  const canAddToList = studentName && hasThisStudentAlready === undefined;

  if (!canAddToList) {
    clearField();
    return;
  }

  addToStudentList(studentName);
  sortStudentList();
  refreshList();
  clearField();
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  processAddition(studentName.value);
});

studentName.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    processAddition(studentName.value);
  }
});
