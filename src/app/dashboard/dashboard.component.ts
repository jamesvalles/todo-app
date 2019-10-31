import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from '../todo-service.service'
import {TodoItemComponent} from '../todo-item/todo-item.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    items; 
   // id : string = "3gKE5GacqdjOK2K2UlH6";
  constructor(private _dbService: TodoServiceService) {
      this.items = _dbService.items;
    }

  ngOnInit() {
  }

 

}