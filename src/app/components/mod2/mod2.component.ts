import {Component, LOCALE_ID} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DatePipe, NgClass, NgForOf, NgIf, SlicePipe, TitleCasePipe} from "@angular/common";

//import de la local fr pour formaliser toutes les dates
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@Component({
  selector: 'app-mod2',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    NgForOf,
    TitleCasePipe,
    SlicePipe,
    DatePipe
  ],
  //import de la local fr
  //providers : [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  templateUrl: './mod2.component.html',
  styleUrl: './mod2.component.css'
})
export class Mod2Component {

  public name: string = "";
  public users: string[]
  public date : Date

  constructor() {
    this.users = [];
    this.date = new Date();
  }

  public resetName(): void {
    this.name = ""
  }

  public addUser() {
    if (this.name) {
      this.users.push(this.name);
      this.name = "";
    }
  }

  public removeUser(user: string) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  //permet de visualiser le one-way-binding [ngModel] qui met à jour l'input après 5 sec
  ngOnInit() {
    // setTimeout(() =>{
    //   this.name = "Michel"
    // }, 5000)
    //await new Promise(f => setTimeout(f, 5000));
  }


}
