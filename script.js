const header = document.querySelector(".header");
const sun = document.querySelector(".header .sun");
const moon = document.querySelector(".header .moon");
const form = document.querySelector("form");
const input = document.querySelector("input");
const todoList = document.querySelector(".todo-list");
const todos = document.querySelector(".todos");
const todoNums = document.querySelectorAll(".todo");
const numItems = document.querySelector(".items-left span");
const main = document.querySelector(".main");
const states = document.querySelector(".states");

numItems.textContent = todoNums.length;

moon.addEventListener("click", () => {
  const deleteTodo = document.querySelectorAll(".delete");
  moon.style.display = "none";
  sun.style.display = "inline";
  header.classList.toggle("header-dark");
  todoList.style.backgroundColor = "hsl(233, 14%, 35%)";
  input.style.backgroundColor = "hsl(233, 14%, 35%)";
  states.style.backgroundColor = "hsl(233, 14%, 35%)";
  document.querySelector("body").style.backgroundColor = "hsl(237, 14%, 26%)";
  for (let i = 0; i < deleteTodo.length; i++) {
    deleteTodo[i].classList.toggle("delete-filter");
  }
});

sun.addEventListener("click", () => {
  const deleteTodo = document.querySelectorAll(".delete");
  sun.style.display = "none";
  moon.style.display = "inline";
  header.classList.toggle("header-dark");
  todoList.style.backgroundColor = "white";
  input.style.backgroundColor = "white";
  states.style.backgroundColor = "white";
  document.querySelector("body").style.backgroundColor = "white";
  for (let i = 0; i < deleteTodo.length; i++) {
    deleteTodo[i].classList.toggle("delete-filter");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 && input.value) {
    addToDo();
    const tasks = document.querySelectorAll(".todo .task");
    tasks[tasks.length - 1].textContent = input.value;
    numItems.textContent = document.querySelectorAll(".todo").length;
    input.value = "";
    event.preventDefault();
  }
});

function addToDo() {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.innerHTML = `<div class="circle">
              <img
                src="./images/icon-check.svg"
                alt="icon-check"
                class="check"
              />
            </div>
            <p class="task"></p>
            <img
              src="./images/icon-cross.svg"
              alt="icon-cross"
              class="delete"
            />
          </div>`;
  todos.appendChild(todo);
}

todos.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    const circle = event.target;
    const check = circle.querySelector(".check");
    const task = circle.parentElement.querySelector(".task");
    circle.classList.toggle("circle-checked");
    check.classList.toggle("checked");
    task.classList.toggle("task-crossed");
  }
  if (event.target.classList.contains("check")) {
    const check = event.target;
    const circle = check.parentElement;
    const task = circle.parentElement.querySelector(".task");
    circle.classList.toggle("circle-checked");
    check.classList.toggle("checked");
    task.classList.toggle("task-crossed");
  }
  if (event.target.matches(".delete")) {
    event.target.parentElement.remove();
    numItems.textContent = document.querySelectorAll(".todo").length;
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.matches(".clear")) {
    const completed = todoList.querySelectorAll(".todo .circle");
    for (let i = 0; i < completed.length; i++) {
      if (completed[i].matches(".circle-checked")) {
        completed[i].parentElement.remove();
      }
    }
    numItems.textContent = document.querySelectorAll(".todo").length;
  }
});

main.addEventListener("click", (event) => {
  if (event.target.matches(".active")) {
    const activeCircle = main.querySelectorAll(".todo .circle");
    for (let i = 0; i < activeCircle.length; i++) {
      if (activeCircle[i].matches(".circle-checked")) {
        activeCircle[i].parentElement.style.display = "none";
      } else {
        activeCircle[i].parentElement.style.display = "flex";
      }
    }
    const checkedCircle = main.querySelectorAll(".todo .circle-checked");
    numItems.textContent =
      document.querySelectorAll(".todo").length - checkedCircle.length;
  }
  if (event.target.matches(".completed")) {
    const activeCircle = main.querySelectorAll(".todo .circle");
    for (let i = 0; i < activeCircle.length; i++) {
      if (activeCircle[i].matches(".circle-checked")) {
        activeCircle[i].parentElement.style.display = "flex";
      } else {
        activeCircle[i].parentElement.style.display = "none";
      }
    }
    const checkedCircle = main.querySelectorAll(".todo .circle-checked");
    numItems.textContent = checkedCircle.length;
  }
  if (event.target.matches(".all")) {
    const activeCircle = main.querySelectorAll(".todo .circle");
    for (let i = 0; i < activeCircle.length; i++) {
      activeCircle[i].parentElement.style.display = "flex";
    }
    numItems.textContent = document.querySelectorAll(".todo").length;
  }
});
