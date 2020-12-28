import Project from './project';

let projectLibrary = localStorage.getItem('array') ? JSON.parse(localStorage.getItem('array')) : [];
let projectData = JSON.parse(localStorage.getItem('array'));

const projectController = (() => {
    const content = document.getElementById('content');

    const create = (params) => {
      let project = buildProject(params);
      let addNewToDo = document.createElement('div');
      addNewToDo.className = 'add-todo';

      project.append(addNewToDo);
      content.append(project);
    }

    const index = () => {
      if (projectData != null && projectData.length > 1) {
        console.log(projectData)
        for (var i = 0; i < projectData.length ; i++) {
          content.append(displayProject(projectData[i]));
        };

        return content;
      }
    }

    const buildProject = params => {
      let project = new Project( {'name': params.title} );
      project.addToDo( {'name': params.name, 'description': params.description, 'dueDate': params.due, 'priority': params.priority, 'done': params.done} );
      projectLibrary.push(project);
      localStorage.setItem('array', JSON.stringify(projectLibrary));
      content.append(displayProject(project));
    }

    const displayProject = project => {
      let card = buildProjectCard(project.name);
      let item = '';

      for (let i = 0; i < project.todos.length; i++) {
        item = displayToDo(project.todos[i]);
        card.append(item);
      }

      return card;
    }

    const buildProjectCard = title => {
      let header = document.createElement('div');
      header.className = 'project-name';
      header.textContent = title;

      let card = document.createElement('div');
      card.className = 'card';
  
      card.append(header)
      return card;
    };

    const displayToDo = task => {
      let display = document.createElement('div');
      display.className = 'display';
      
      let name = document.createElement('h2');
      name.className = 'task-name';
      name.textContent = task.name;

      let description = document.createElement('li');
      description.className = 'tasks';
      description.textContent = 'Description: ' + task.description;

      let dueDate = document.createElement('li');
      dueDate.className = 'tasks';
      dueDate.textContent = 'Due: ' + task.dueDate;

      let done = document.createElement('li');
      done.className = 'tasks';
      done.textContent = 'Done: ' + task.done;

      let priority = document.createElement('li');
      priority.className = 'tasks';
      priority.textContent = 'Priority: ' + task.priority;

      display.append(name, description, dueDate, done, priority);
      return display;  
    }

    return { create, index };
})();

export default projectController;
