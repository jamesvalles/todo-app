import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(private db : AngularFirestore){
    this.items = db.collection('todos').valueChanges();
  }
  title = 'todo-app';

  onSubmit(){
    console.log("Pushed to database.")
    this.db.collection('todos').add({task: "Go grocery shopping", dueDate:"Urgent"});
  }

}


