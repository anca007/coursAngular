import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-mod2demo1',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './mod2demo1.component.html',
  styleUrl: './mod2demo1.component.css'
})
export class Mod2demo1Component {

  public name : string = "";

  public resetName() : void{
    this.name = ""
  }

  //permet de visualiser le one-way-binding [ngModel] qui met à jour l'input après 5 sec
  ngOnInit() {
    setTimeout(() =>{
      this.name = "Michel"
    }, 5000)
    //await new Promise(f => setTimeout(f, 5000));
  }


}
