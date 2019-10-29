import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from '../todo-service.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 dueDate : String ;
 title : String; 

  
  constructor() {

    
   }

  ngOnInit() {
  }

}
