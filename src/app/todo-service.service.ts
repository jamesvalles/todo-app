import { Injectable } from '@angular/core';
import {Todo} from '../model/toDo'

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { 

    let toDoOne = new Todo("Complete my Data Science Homework", "Urgent");
    let toDoTwo = new Todo("Plan my next club meeting", "Days");
    let toDoThree = new Todo("Plan upcoming trip to Cali", "Week");
    let toDoFour = new Todo("Code project for work", "Urgent");
  }
}
var toDoList = [];

function addTodo(){

}

function updatedDueDate(){

}

//Extra Credit **Remove todo item**

function removeTodo(){

}