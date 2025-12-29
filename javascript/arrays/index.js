const DB_NAME = "devia";
const DB_VERSION = 1;

const request = await indexedDB.open(DB_NAME, DB_VERSION);
request.onerror = function () {
  console.log("error :" + request.error);
};

request.onsuccess = function () {
  let db = openRequest.result;
  db.onversionchange = function () {
    db.close();
    alert("Database is outdated, please reload the page.");
  };
};

const studentList = [];
const list = document.querySelector(".list");
const studentName = document.querySelector("input");
const ajouterBtn = document.querySelector("button");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const generateUID = () => {
  return crypto.randomUUID();
};

function addToDOM(value) {
  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
}

function addToStudentList(nameToAdd) {
  const hasThisStudentAlready = studentList.find(
    (name) => name.toLowerCase() === nameToAdd.toLowerCase()
  );

  if (
    nameToAdd == "" ||
    nameToAdd === undefined ||
    hasThisStudentAlready !== undefined
  ) {
    studentName.value = "";
    return;
  }
  studentList.push(nameToAdd);

  addToDOM(nameToAdd);
  studentName.value = "";
}

ajouterBtn.addEventListener("click", function () {
  addToStudentList(studentName.value);
});

studentName.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addToStudentList(studentName.value);
  }
});
