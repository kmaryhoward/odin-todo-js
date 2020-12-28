class ToDo {
    constructor(params) {
        this.name = params['name'];
        this.done = params['done'];
        this.description = params['description'];
        this.dueDate = params['dueDate'];
        this.priority = params['priority'];
    }

    static new(params) {
        return new this(params);
    }
}

export default ToDo;