import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public chats: Observable<any[]>;

  constructor(firestore: AngularFirestore){
    this.chats = firestore.collection('chats').valueChanges();
  }

}
