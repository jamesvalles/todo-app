import { Component, OnInit, Input} from '@angular/core';
import {TodoServiceService} from '../todo-service.service'
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {
  @Input() task : String;
  @Input() dueDate: String;
  @Input() id ;
  
    
  constructor(private _dbService : TodoServiceService) {
     
   }

  ngOnInit() {
  }

  remove(key : string){
    
    console.log("Remove button pressed.")
    console.log("This is doc id:" + this.id);
    this._dbService.removeTodo(this.id);
  }

  selectDueDate(date : String){
    console.log("Selected due date.")
    this.dueDate = date; 

  }
}
