import {Component, OnInit} from '@angular/core';
import {TestService} from "../../services/test.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-mod-test',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './mod-test.component.html',
  styleUrl: './mod-test.component.css'
})
export class ModTestComponent implements OnInit{

  public username! : string

  constructor(private testService : TestService) {
  }

  ngOnInit(): void {
    // this.username = 'Michel'
    this.username = this.testService.getData()
  }

  public changeUsername(){
    this.username = "Robert"
  }
}
