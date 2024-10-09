import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-mod2',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './mod2.component.html',
  styleUrl: './mod2.component.css'
})
export class Mod2Component {

  public name : string = "";

  public resetName() : void{
    this.name = ""
  }

  //permet de visualiser le one-way-binding [ngModel] qui met à jour l'input après 5 sec
  ngOnInit() {
    // setTimeout(() =>{
    //   this.name = "Michel"
    // }, 5000)
    //await new Promise(f => setTimeout(f, 5000));
  }


}
