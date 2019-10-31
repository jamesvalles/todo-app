import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from '../todo-service.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {
  selectedDueDate : String;
  task = new FormControl('');

  items; 
    
  constructor(private _dbService: TodoServiceService) {
      this.items = _dbService.items;
    }

  ngOnInit() {
  }

  selectDueDate(date : String){
    console.log("Selected due date.")
    this.selectedDueDate = date; 

  }
  onSubmit(){
    console.log("Onsubmit button pressed");
    this.task.reset;
    this._dbService.addTodo(this.task.value, this.selectedDueDate);

  }
}
