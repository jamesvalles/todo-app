import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import {Todo} from '../model/toDo'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  items: Observable<any[]>;

  constructor(private db : AngularFirestore){
   this.items = db.collection('todos').valueChanges();   
   }
  
  addTodo(taskContent: string, dueDateContent : String){
  console.log("Pushed to database.")
  this.db.collection("todos").doc(taskContent).set({
    task: taskContent,
    dueDate: dueDateContent
})


 // this.db.collection('todos').add({task: taskContent, dueDate: dueDateContent});
}

updatedDueDate(){

}


//Extra Credit **Remove todo item**

 removeTodo(id : string){
  console.log("Removed from Firebase.")
  this.db.collection("todos").doc(id).delete();
   

}
}


