import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bonjour !';
  isAdmin:boolean = false;
  

  switchIsAdmin():void{
    this.isAdmin ? this.isAdmin = false : this.isAdmin = true;
  }
}


