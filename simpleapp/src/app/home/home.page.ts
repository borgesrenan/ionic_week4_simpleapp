import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
    myVariable: string = 'The force is with me!';
    myVariable2: string ="Hello from CCT!";

    updateMyValue() {
      this.myVariable = 'Now the force is even stronger!';}

      updateMyValue2() {
        this.myVariable2 = 'Hello from Ionic!';}
    }
