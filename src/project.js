import ToDo from "./todo";

class Project {
    constructor(params) {
        this.name = params['name'];
        this.todos = [];
    }

    static new(params) {
        return new this(params);
    }

    addToDo(params) {
      this.todos.push(ToDo.new(params));
    }
    
}

export default Project;