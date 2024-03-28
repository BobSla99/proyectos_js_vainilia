// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const constainer = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElemnt;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
//submit.
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItem);
window.addEventListener("DOMContentLoaded", setupItem);

// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value !== "" && editFlag === false) {
    //add item
    createListItems(id,value);
    //diplay alert
    displayAlert("item aded to the list", "success");
    //show container
    constainer.classList.add("show-container");
    addToLocalStorage(id, value);
    //setBackToDefault
    setBackToDefault();
  } else if (value !== "" && editFlag === true) {
    editElemnt.textContent = value;
    displayAlert("value changed", "success");

    editLocalStorage(editId, editElemnt.textContent);
    setBackToDefault();
  } else {
    displayAlert("empty value", "danger");
  }
}

function clearItem(e) {
  const items = document.querySelectorAll(".grocery-item");

  //metodo rapido para eliminar una lista de node

  // items.forEach((item) => {
  //   item.parentElement.removeChild(item);
  // });

  //metodo para eliminar una lista de node conociendo el parent.
  //si tengo item en items
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }

  list.classList.remove("show-container");

  displayAlert("empty list", "danger");
  setBackToDefault();

  localStorage.removeItem("list");
}

//alert display alert
function displayAlert(text, action) {
  if (alert.textContent) {
    alert.classList.remove("alert-danger");
    alert.classList.remove("alert-success");
  }
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  //remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 3000);
}
//edit function
function editItem(e) {
  //recupero el item que se va a editar
  const item = e.currentTarget.parentElement.parentElement;
  //obtengo el id del
  editId = item.dataset.id;
  //guardo el elemento  <p> </p> a editar
  editElemnt = e.currentTarget.parentElement.previousElementSibling;

  //poner el valor de <p></p> en el formulario
  grocery.value = editElemnt.innerHTML;
  editFlag = true;

  submitBtn.textContent = "edit";
}
//delete function

function deleteItem(e) {
  const item = e.currentTarget.parentElement.parentElement;
  item.parentNode.removeChild(item);
  // const id = item.getAttribute("data-id");
  const id = item.dataset.id;
  if (list.children.length === 0) {
    constainer.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  //remove from local storage
  removeFromLocalStorage(id);
}
//setBackToDefault
function setBackToDefault() {
  console.log("back to default");
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  //creo un new object
  const grocery = { id, value };
  //obtengo los datos de localStorage
  let items = getLocalStorage(); //si no hay devuelve []vacio
  //le anado el new item
  items.push(grocery);
  //actualiza el localStorage
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  //actualizp el local storage
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((it) => it.id !== id);
  localStorage.setItem("list", JSON.stringify(items));
  console.log(items);
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// ****** SETUP ITEMS ************
function setupItem() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItems(item.id, item.value);
    });
    constainer.classList.add("show-container")
  }
}

function createListItems(id, value) {
  const element = document.createElement("article");
  //add class
  element.classList.add("grocery-item");
  //add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  //add html
  element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
                <button class="edit-btn" type="button">
                    <i class="fas fa-edit"></i>
                </button>
            <button class="delete-btn" type="button">
                <i class="fas fa-trash"></i>
            </button>`;

  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");

  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  list.appendChild(element);
}
