import { DBStorage } from "./db.js";

const studentList = new Map();
const studentNameInput = document.querySelector("input");
const templateItem = document.getElementById("item");

/**
 * Rafraichir la liste
 * @returns {void}
 */
function refreshList() {
  const list = document.querySelector(".list");
  list.replaceChildren();
  studentList.forEach((student) => {
    insertStudentToDOMList(student, list);
  });
}

window.addEventListener("load", () => {
  for (const student of DBStorage.getFromStorage()) {
    studentList.set(student.id, student);
  }
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
  if (!studentList.has(studentId)) return;

  studentList.delete(studentId);
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
  const sortedList = [...studentList.values()].sort((studentA, studentB) =>
    studentA.name.toLowerCase().localeCompare(studentB.name.toLowerCase())
  );
  studentList.clear();
  sortedList.forEach((student) => {
    studentList.set(student.id, student);
  });
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
  studentNameInput.value = "";
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
  studentList.set(newStudent.id, newStudent);
  DBStorage.names = [...studentList.values()];
}

/**
 * Manager le processus d'ajout un etudiant
 * @param {string} studentNameInput nom de l'etudiant
 * @returns {void}
 */
function processAddition(studentNameInput) {
  let hasThisStudentAlready = false;
  studentList.forEach((student) => {
    hasThisStudentAlready =
      student.name.toLowerCase() === studentNameInput.toLowerCase();
  });

  const canAddToList = studentNameInput && !hasThisStudentAlready;

  if (!canAddToList) {
    clearField();
    return;
  }

  addToStudentList(studentNameInput);
  sortStudentList();
  refreshList();
  clearField();
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  processAddition(studentNameInput.value);
});
