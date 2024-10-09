import { Component } from '@angular/core';
import {Mod4Service} from "../../services/mod4.service";

@Component({
  selector: 'app-mod4',
  standalone: true,
  imports: [],
  providers : [Mod4Service],
  templateUrl: './mod4.component.html',
  styleUrl: './mod4.component.css'
})
export class Mod4Component {

  public version : string

  constructor(private mod4 : Mod4Service) {
    this.version = this.mod4.getVersion();
  }

}
