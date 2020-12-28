import projectController from './projectcontroller';
const projectButton = document.getElementById("project-submit");
const projectForm = document.getElementById("project-form");
const toDoForm = document.getElementById("todo-form");
const toDoButton = document.getElementById("todo-submit");

projectButton.addEventListener("click", (e) => {
  e.preventDefault();
  toDoForm.classList.toggle("visible");
  projectForm.classList.toggle("hidden");
});

toDoButton.addEventListener("click", (e) => {
  e.preventDefault();
  toDoForm.classList.toggle("visible");
  projectForm.classList.toggle("hidden");
  addProjectWithToDo();
  document.querySelector('form').reset();
});

let addProjectWithToDo = () => {
  let projectWithToDo = {
    title: document.getElementById("project-title").value,
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    due: new Date().toLocaleDateString(), 
    done: document.getElementById("done").checked ? "yes" : "no",
    priority: document.getElementById("priority").value
  }

  projectController.create(projectWithToDo);
}

window.onload = () => {
  projectController.index();
}
