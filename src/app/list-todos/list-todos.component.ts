import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../service/data/todo-data.service";

//Future
// - No Navigation Menu and Footer
// - Formatting - Bootstrap
// - No Security for Menus
// - Hardcoded Logic in the TodoList and Login Components
// - Remaining Functionality - Edit, Delete, Add
// - Spring Boot
// - Spring Security

export class Todo {
  constructor(
    public id: number,
    public description: String,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  // [
  //   new Todo(1, "Learn to Code", false, new Date()),
  //   new Todo(2, "Become an expert at Angular", false, new Date()),
  //   new Todo(3, "Visit Singapore", false, new Date())
  //   // { id: 1, description: "Learn to Code" },
  //   // { id: 2, description: "Become an expert at Angular" },
  //   // { id: 3, description: "Visit Singapore" }
  // ];

  // todo = {
  //   id: 1,
  //   description: "Learn to Dance"
  // };

  constructor(private todoService: TodoDataService) {}

  ngOnInit() {
    this.todoService.retrieveAllTodos("weesheng").subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }
}
